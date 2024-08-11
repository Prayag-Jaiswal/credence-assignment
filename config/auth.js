const { authKey } = require("./config");

function checkAuth(req, res, next) {
    if (req.headers.x_api_key === authKey) {
        next();
    } else {
        return res.status(403).json({ status: "failed", msg: "Unauthorized access :(" });
    }
}

module.exports = {
    checkAuth,
}