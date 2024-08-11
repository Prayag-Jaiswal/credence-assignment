const fs = require("fs");
const path = require('path');

function logger(logData) {

    const logPath = path.join(__dirname, '../logs/request.log');
    fs.appendFile(logPath, logData, (err) => {
        if (err) throw new Error(`Error in writing data`);
    });
}

module.exports = {
    logger,
};