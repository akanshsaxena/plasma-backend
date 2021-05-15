const router = require("express").Router();
const requestSchema = require("../dbmodels/request");

router.post('/addRequest', async (req, res) => {
    const {
        requester,
        requester_id,
        patient,
        age,
        gender,
        blood,
        unit,
        address1,
        address2,
        state,
        district,
        city,
        pin,
        additonalInfo,
        requester_email,
        requester_number
    } = req.body;
    try {
        if (requester === "" || requester_id === "" || requester_email === "" || requester_number === "" || patient === "" || age === null || gender === "" || blood === "" || unit === "" || address1 === "" || state === "" || district === "" || city === "" || pin === null) return res.json({
            status: "failed",
            message: "All fields are mandatory"
        })
        else {
            const addedRequest = new requestSchema({
                requester,
                requester_id,
                requester_email,
                requester_number,
                patient,
                age,
                gender,
                blood,
                unit,
                address1,
                address2,
                state,
                district,
                city,
                additonalInfo,
                pin
            })
            const response = await addedRequest.save();
            if (response) return res.json({
                status: "success",
                message: "Request added successfully"
            })
        }
    } catch (err) {
        return res.json({
            status: "failed",
            message: "Something went wrong"
        })
    }
});

module.exports = router;