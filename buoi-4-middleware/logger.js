const loggerMdw=(req, res, next)=>{
    const time=new Date();
    console.log("new req at: " + time.toLocaleString());

    next();
};

module.exports=loggerMdw