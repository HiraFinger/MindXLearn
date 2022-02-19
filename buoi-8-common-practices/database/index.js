const { MongoClient } = require("mongodb");

const db = {};

const connectToDb =async () => {
    const mongoClient = new MongoClient("mongodb://localhost:27017");
    await mongoClient.connect()
    console.log("DB Connected")
    const database=mongoClient.db("mindx_web_55")
    db.students=database.collection("students");
    db.teachers=database.collection("teachers");
    db.users=database.collection("users");
};

module.exports = { db, connectToDb };
