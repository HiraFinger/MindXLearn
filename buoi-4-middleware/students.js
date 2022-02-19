const express = require("express");
const router = express.Router();
// const logging = require("./logger");
const authMdw = require("./auth");

const app = express();

const students = [
    { id: 1, name: "Minh", className: "a" },
    { id: 2, name: "test", className: "a" },
];

router.get("/", authMdw, (req, res) => {
    console.log(req.authUser);
    res.json(
        students.filter((s) => {
            if (req.query.className && s.className !== req.query.className) {
                return false;
            }
            if (req.query.id && s.id !== +req.query.id) {
                return false;
            }
            return true;
        })
    );
});
// /students/:id
router.get("/:id", authMdw, (req, res) => {
    console.log(req.params);
    const student = students.find((s) => s.id === +req.params.id);
    res.json(student);
});

router.post("/add", authMdw, (req, res) => {
    if (students.find((s) => s.id === req.params.id)) {
        throw new Error("Student existed");
    }
    // students.push(req.body);
    res.send("ok");
});

router.put("/update/:id",authMdw,(req,res)=>{

})

router.delete("/", authMdw, (req, res) => {
    students.splice(2, 1);
    res.send("ok");
});

module.exports = router;
