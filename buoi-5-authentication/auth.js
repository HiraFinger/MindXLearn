const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Step 1: Buy a ticket
router.post("/login", (req, res) => {
    // TODO: user check here first
    // Create new token
    const token = jwt.sign(
        {
            username: req.body.username,
            // password: req.body.password,
        },
        "MY_PRIVATE_KEY",
        {
            expiresIn: 15 * 60,
        }
    );
    res.send(token);
});

module.exports = router;
