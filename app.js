require('dotenv').config();
const express = require('express');
const cors = require('cors');
const databaseConnect = require('./config/mongo')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("storage"))

const port = process.env.PORT || 3000;

/**
 * Aquí invocamos a las Rutas
 */

app.use("/api", require("./routes"));

app.listen(port, () => {
    console.log("APP ONLINE IN PORT:", port);
})
databaseConnect();