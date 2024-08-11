const express = require("express");
const userRouter = require("./routes/userRoute");
const { mongoConnect } = require("./config/connection");
const { checkAuth } = require("./config/auth");


const app = new express();

mongoConnect("mongodb://127.0.0.1:27017/users")
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.urlencoded({ extended: false }));

app.use("/api/users", checkAuth, userRouter);

app.listen(8000, () => {
    console.log("Server Started :)");
});


