const fs = require('fs');
const express = require('express');
const router = express.Router();

const PATH_ROUTES = __dirname;

/* const a = fs.readdirSync(PATH_ROUTES)
console.log({a}); */

const removeExtension = (fileName) => {
    //TODO:TACKS.JS
    return fileName.split('.').shift();
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file);
    if (name != 'index') {
        console.log("CARGANDO RUTA =====>", name);
        router.use(`/${name}`, require(`./${file}`));
    }
})

module.exports = router;