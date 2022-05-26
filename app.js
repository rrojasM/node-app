require('dotenv').config();
const express = require('express');
const cors = require('cors');
const databaseConnect = require('./config/mongo')
const app = express();
const bodyParse = require('body-parser')

app.use(cors());
app.use(express.json());
app.use(express.static("storage"))
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;

/**
 * Aquí invocamos a las Rutas
 */

app.use("/api", require("./routes"));

app.listen(PORT, () => {
    console.log("APP ONLINE IN PORT:", PORT);
});

databaseConnect();