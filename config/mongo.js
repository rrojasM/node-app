const mongoose = require('mongoose');

const databaseConnect = () => {

    const db = process.env.URL_MONGO;

    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
        (err, res) => {
            if (!err) {
                console.log("MONGODB ONLINE");
            } else {
                console.log("MONGODB ERROR", err);
            }
        });

}


module.exports = databaseConnect;