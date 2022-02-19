const express = require("express");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbClient = new MongoClient(url);
dbClient.connect(async () => {
    const db = dbClient.db("mindx_web_55");
    // db.collection('teachers').insertOne({name:"Bob", age:22, address:"HCM",})
    const allItem=await db.collection('inventory').find({
        $or:[{status:"A"}, {qty:{$lt:30}}]
    }).toArray()
    console.log(allItem)
});

const app = express();
const port = 5000;

app.listen(port, () => {
    console.log("app is running at 5000");
});
