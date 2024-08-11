const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
    }
});

const User = mongoose.model("user", usersSchema);

module.exports = User;