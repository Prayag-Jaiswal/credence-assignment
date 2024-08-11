const express = require("express");
const { handleGetAllUser, handleGetUserById, handleCreateUserById, handleUpdateUserById, handleDeleteUserById } = require("../controllers/userController");


const router = express.Router();

router.get("/", handleGetAllUser)

router.post("/create", handleCreateUserById);

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router;