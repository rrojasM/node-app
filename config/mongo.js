const mongoose = require('mongoose');

const databaseConnect = () => {

    const db = process.env.URL_MONGO;

    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
        (err, res) => {
            if (!err) {
                console.log("MONGO DATABASE IS ONLINE");
            } else {
                console.log("MONGO DATABASE ERROR", err);
            }
        });

}


module.exports = databaseConnect;