const express = require("express");
const { ObjectId } = require("mongodb");
const { db } = require("./db");

const studentRouter = express.Router();

// Read
studentRouter.get("/", async (req, res) => {
    const filter={};
    if(req.query.gender){
        filter.gender=req.query.gender
    }
    if(req.query.dob){
        filter.dob=new Date(req.query.dob)
        // if(date.toString()==="Invalid Date"){
        //     throw new Error("Invalid dob")
        // }
        // filter.dob=date
    }
    // const students = await db.students
    // .find(filter)
    // .sort({
    //     dob:-1
    // })
    // .skip(Number(req.query.skip))
    // .limit(Number(req.query.limit))
    // .project({
    //     _id:0,
    //     lastModified:0
    // })
    // .toArray();
    const students= await db.students.aggregate([
        {$match: filter},
        {$sort:{
            dob:-1
        }},
        {
            $skip:(Number(req.query.skip))
        },
        {
            $limit:(Number(req.query.limit))
        },
        {
            $project:{

                dob:0
            }
        },
        {
            $lookup:{
                from:'books',
                localField:'_id',
                foreignField:'studentId',
                as:"books",
            }
        },
        {
            $project:{
                _id:0,

            }
        }
    ]).toArray()
    res.json(students);
});
// Find
studentRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const student = await db.students.findOne({ _id: ObjectId(id) });
    res.json(student);
});
// Create
studentRouter.post("/", async (req, res) => {
    const student = {
        name: req.body.name,
        gender: req.body.gender,
        dob: new Date(req.body.dob),
    };
    const result = await db.students.insertOne(student);
    res.json({
        _id: result.insertedId,
        student: student,
    });
});
// Update
studentRouter.put("/:id", async (req, res) => {
    const id = req.params.id;
    const result = await db.students.updateOne(
        { 
        _id: ObjectId(id)
        }, 
        { 
            $set:{
                name:req.body.name, 
                gender:req.body.gender, 
                dob:new Date(req.body.dob), 
            },
            $currentDate:{
                lastModified:true,
            }
        }
    );
    res.json(result);
});
// Delete
studentRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const result = await db.students.deleteOne({ _id: ObjectId(id) });
    res.json({
        deletedId:id,
    })
});

module.exports = studentRouter;
