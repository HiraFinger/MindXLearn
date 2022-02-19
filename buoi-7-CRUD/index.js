const express = require("express");
const { connectToDb } = require("./db");
const studentRouter = require("./students");
const classesRouter = require("./classes");

const app = express();
const port = 5000;

app.use(express.json())

app.use("/students",studentRouter);
app.use("/classes",classesRouter);

connectToDb();

app.listen(port, () => {
    console.log(`app is running at 5000`);
});
