const User = require("../models/userModel");
const { logger } = require("../config/logger");

function getLogDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const finalDate = `${day}-${month}-${year}`;
    return finalDate;
}

async function handleGetAllUser(req, res) {
    const allUserData = await User.find({});
    const logDate = getLogDate();
    const logData = `[ACTION : Get all User | IP : ${req.ip} | DATE : ${logDate}] \n`;
    logger(logData);
    return res.json(allUserData);
}

async function handleGetUserById(req, res) {
    const usrSrcById = await User.findById(req.params.id);
    if (!usrSrcById) return res.status(404).json({ status: "Failed", msg: "User not found :(" });
    const logDate = getLogDate();
    const logData = `[ACTION : Get User - ${req.params.id} | IP : ${req.ip} | DATE : ${logDate}] \n`;
    logger(logData);
    return res.json(usrSrcById);
}

async function handleUpdateUserById(req, res) {
    const userUpdData = req.body;
    if (!userUpdData) return res.json({ status: "Something went wrong :(", msg: "Please send valid data :)" });

    const nameUpd = (userUpdData.name) ? userUpdData.name : '';
    const imgUpd = (userUpdData.img) ? userUpdData.img : '';
    const summaryUpd = (userUpdData.summary) ? userUpdData.summary : '';

    let updateValue = {};
    if (nameUpd) {
        updateValue.name = nameUpd;
    }

    if (imgUpd) {
        updateValue.name = imgUpd;
    }

    if (summaryUpd) {
        updateValue.summary = summaryUpd;
    }

    //console.log(updateValue);
    if (!updateValue) return res.status(400).json({ status: "Something went wrong :(", msg: "Please send valid data :)" });
    const usrSrcById = await User.findById(req.params.id);
    if (!usrSrcById) return res.status(404).json({ status: "Failed", msg: "User not found :(" });

    const usrUpdById = await User.findByIdAndUpdate(req.params.id, updateValue);
    if (!usrUpdById) return res.status(404).json({ status: "Failed", msg: "User not updated :(" });

    const logDate = getLogDate();
    const logData = `[ACTION : Update User - ${req.params.id} | IP : ${req.ip} | DATE : ${logDate}] \n`;
    logger(logData);
    return res.status(201).json({ status: "success", msg: "User updated successfully :)" });
}

async function handleDeleteUserById(req, res) {

    const usrSrcById = await User.findById(req.params.id);
    if (!usrSrcById) return res.status(404).json({ status: "Failed", msg: "User not found :(" });

    const usrDelById = await User.findByIdAndDelete(req.params.id);
    if (!usrDelById) return res.status(404).json({ status: "Failed", msg: "User not updated :(" });

    const logDate = getLogDate();
    const logData = `[ACTION : Delete User - ${req.params.id} | IP : ${req.ip} | DATE : ${logDate}] \n`;
    logger(logData);
    return res.status(201).json({ status: "success", msg: "User deleted successfully :)" });;
}

async function handleCreateUserById(req, res) {
    const postData = req.body;
    if (!postData || !postData.name || !postData.img || !postData.summary) {
        return res.status(400).json({ status: "Something went wrong :(", msg: "Please send valid data :)" });
    }

    const qryResult = await User.create({
        name: postData.name,
        img: postData.img,
        summary: postData.summary
    });

    if (qryResult) {

        const logDate = getLogDate();
        const logData = `[ACTION : Add user - ${qryResult._id} | IP : ${req.ip} | DATE : ${logDate}] \n`;
        logger(logData);
        return res.status(201).json({ status: "success", msg: `Record Id ${qryResult._id} created successfully :)` });
    }
};

module.exports = {
    handleGetAllUser,
    handleGetUserById,
    handleCreateUserById,
    handleUpdateUserById,
    handleDeleteUserById,
};