const authMdw = (req, res, next) => {
    const authUser = {username:"Long"};
    if (authUser) {
        req.authUser=authUser;
        next();
    }else{
        res.send("loging first")
    }
};

module.exports = authMdw;
