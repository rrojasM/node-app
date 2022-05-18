require('dotenv').config();
const express = require('express');
const cors = require('cors');
const databaseConnect = require('./config/mongo')
const app = express();


app.use(cors());

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log("APP ONLINE IN PORT:", port);
})

databaseConnect();