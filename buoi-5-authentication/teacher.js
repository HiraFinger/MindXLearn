const express = require("express");
const jwt = require("jsonwebtoken");
const authMdw = require("./jwt");
const router = express.Router();

const teacherList = [
    { name: "Long", username: "long" },
    { name: "SomeOne", username: "someone" },
    { name: "Minh", username: "minh" },
];

router.get("/", authMdw, (req, res) => {
    res.json(teacherList);
});

router.get("/:username", authMdw, (req, res)=>{
    console.log(req.username);
    if(req.params.username !=req.username){
        res.status(403).send("Permission denied")
    } else{
        res.send(teacherList.find((t)=> t.username == req.params.username));
    }
})

router.post("/", authMdw, (req, res) => {});

module.exports = router;
