const mongoose = require("mongoose");

async function mongoConnect(url) {
    const conn = await mongoose.connect(url);
    if (!conn) {
        throw new Error("Something went wrong with connection :(");
    } else {
        return "MongoDb connected :)";
    }
}

module.exports = {
    mongoConnect,
};