const express = require("express");
const router = express.Router();

const app = express();

const students = [
    { id: 1, name: "Minh", className:"a" },
    { id: 2, name: "test", className:"b" },
];

router.get("/", (req, res) => {
    res.json(
        students.filter((s)=>{
            if(req.query.className && s.className!==req.query.className){
                return false;
            }
            if(req.query.id && s.id!==+req.query.id){
                return false;
            }
            return true;
        })
    );
});

router.get("/:id", (req, res) => {
    console.log(req.params)
    const student= students.find((s)=>s.id=== +req.params.id);
    res.json(student)
});

app.post("/add", (req, res) => {
    students.push({
        id: 3,
        name: "test 2",
    });
    res.send("ok");
});
app.delete("/", (req, res) => {
    students.splice(2,1)
    res.send("ok");
});

module.exports = router;
