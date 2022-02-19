const express = require("express");
const authRouter = require("./auth");
const teacherRouter = require("./teacher");

const app = express();
const port = 5000;
app.use(express.json());

app.use("/auth", authRouter);
app.use("/teacher", teacherRouter);

app.listen(port, () => {
    console.log("app is running at 5000");
});
