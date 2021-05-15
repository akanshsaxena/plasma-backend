const express = require('express');
const mongoose = require('mongoose');
const accountRouter = require('./routes/account');
const requestRouter = require('./routes/request')
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());
mongoose.connect('mongodb+srv://akanshsaxena:Mongo%40723@covid19.neusj.mongodb.net/plasma', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connection established'))
    .catch((err) => console.log(err + " during connecting to mongodb"));


app.use('/account/', accountRouter);
app.use('/request/', requestRouter);
app.listen(5000, () => console.log('listening on port 5000'));