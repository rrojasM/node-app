require('dotenv').config();
const mongoose = require('mongoose');



const databaseConnect = () => {

    const DB = process.env.DB_URI;

    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log("MONGODB ONLINE");
        } else {
            console.log("MONGODB ERROR", err);
        }
    });

}


module.exports = databaseConnect;