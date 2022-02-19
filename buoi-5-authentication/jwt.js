const jwt = require("jsonwebtoken");

const authMdw = (req, res, next) => {
    // check login here
    const token = req.headers.authorization;
    const jwtString = token.split(" ")[1];
    jwt.verify(jwtString, "MY_PRIVATE_KEY", (err, decoded) => {
        if (!err) {
            req.username=decoded.username;
            next();
        } else {
            // console.log(err)
            res.status(401).send(err.message);
        }
    });
};

module.exports = authMdw;
