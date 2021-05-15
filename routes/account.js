const router = require("express").Router();
const jwt = require("jsonwebtoken");
const userSchema = require("../dbmodels/user");

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (email === "" || password === "" || name === "") {
      return res.json({
        status: "failure",
        message: "All fields are mandatory",
      });
    }
    const findUser = await userSchema.findOne({ email });
    if (findUser)
      return res.json({ status: "failure", message: "Email already exists" });
    const user = new userSchema({
      email,
      password,
      name,
    });
    const response = await user.save();
    if (response) {
      return res.json({ status: "success", message: "Account created" });
    }
  } catch (err) {
    console.log(`${err} : Error found while creating user`);
    return res.json({
      status: "err",
      message: "Something went wrong",
    });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email === "" || password === "")
      res.json({
        status: "failure",
        message: "Email and password are mandatory",
      });
    const findUser = await userSchema.findOne({ email });
    if (findUser) {
      if (findUser.password === password) {
        const token = jwt.sign(
          {
            id: findUser._id,
            email: findUser.email,
          },
          "privateKey"
        );
        if (findUser.isFirstLogin)
          res.json({ status: "success", message: "first login", token });
        res.json({ status: "success", message: "log in successful", token });
      } else
        res.json({
          status: "failure",
          message: "Invalid email/password",
        });
    } else {
      res.json({ status: "failure", message: "Incorrect email/password" });
    }
  } catch (err) {
    console.log(`${err} : Error found while signing in user`);
    res.json({
      status: "err",
      message: "Something went wrong",
    });
  }
});

module.exports = router;
