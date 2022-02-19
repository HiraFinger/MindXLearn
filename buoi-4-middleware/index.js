const express = require("express");
const studentRouter = require("./students");
const teacherRouter = require("./teachers");
const morgan = require('morgan')
const loggerMdw=require("./logger");
const authMdw=require("./auth");

const app = express();
const port = 4000;

app.use(morgan("combined"))
app.use(express.json())

app.get("/", loggerMdw , (req, res) => {
    loggerMdw
    res.send("hello");
});

app.use("/students",studentRouter);
app.use("/teachers",teacherRouter);

app.use("/static", express.static('assets'))

// app.use((err,req,res,next)=>{

// })

app.listen(port, () => {
    console.log("app is running at 4000");
});
