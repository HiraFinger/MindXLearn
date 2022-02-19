const express = require("express");
const router = express.Router();

const app = express();

const teachers = [
    { id: 1, name: "Minh" },
    { id: 2, name: "test" },
];

router.get("/", (req, res) => {
    res.json(teachers);
});

app.get("/add", (req, res) => {
    students.push({
        id: 3,
        name: "test 2",
    });
    res.send("ok");
});

module.exports = router;
