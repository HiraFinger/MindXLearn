const { MongoClient } = require("mongodb");


const db = {};
const connectToDb = () => {
    const client = new MongoClient("mongodb://localhost:27017");
    client.connect(() => {
        console.log("DB Connected");
        const database = client.db("mindx_web_55");
        db.students = database.collection("students");
        db.classes = database.collection("classes");
    });
};

module.exports = { connectToDb, db };
