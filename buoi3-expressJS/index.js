const express = require("express");
const studentRouter = require("./students");
const teacherRouter = require("./teachers");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("hello");
});

app.use("/students",studentRouter);
app.use("/teachers",teacherRouter);

app.listen(port, () => {
    console.log("app is running at 4000");
});
