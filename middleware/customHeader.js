require('colors')
const customHeader = (req, res, next) => {
    try {
        const APIKEY = req.headers.API_KEY;
        console.log(APIKEY);
        if (APIKEY === "ruf123" || APIKEY === undefined) {
            next();
        } else {
            res.status(403)
            console.log("ERROR API KEY INCORRECTA".red);
            res.send({ error: "ERROR API KEY INCORRECTA" });
        }
    } catch (e) {
        res.status(403)
        console.log("Error".blue, e);
        res.send({ error: "ALGO OCURRIO EN EL CUSTOM HEADER" });
    }
}



module.exports = customHeader;