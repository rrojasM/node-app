const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete')
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        role: {
            type: ["USER", "ADMIN"],
            default: "USER"
        },
    },
    {
        timestamps: true,
        versionKey: false

    }
)
UserSchema.plugin(mongooseDelete, {overrideMethods: 'all'});
module.exports = mongoose.model("users", UserSchema);