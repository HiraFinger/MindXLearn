const express = require("express");

const { addNewStudent, getAll, deleteStudent, updateStudent, findStudent} = require("../controllers/studentController");


let studentRouter = express.Router();
studentRouter.get("/all", async (req, res) => {
  res.send(JSON.stringify(await getAll()));
});

studentRouter.post("/add", async (req, res) => {
  res.send(await addNewStudent({ name: "Minh", age: 21 }));
});

studentRouter.patch("/update", async (req, res) => {
  res.send(await updateStudent({id:"bde6e6d0-67d9-45ff-8226-fd6168a5afa7",age:1}));
});

studentRouter.delete("/delete", async (req, res) => {
  res.send(await deleteStudent({id:"bde6e6d0-67d9-45ff-8226-fd6168a5afa7"}));
});

studentRouter.get("/find", async (req, res) => {
  res.send(await findStudent({id:"bde6e6d0-67d9-45ff-8226-fd6168a5afa7"}));
});

module.exports = studentRouter;
