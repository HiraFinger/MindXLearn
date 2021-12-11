
var fs = require('fs');
const path = require('path');
const uuid= require('uuid');


// const newStudent={
//     name:"Minh",
//     age:21
// }

// Lấy dữ liệu từ file
const getAll= async() =>{
    try{
        const dataString = await fs.promises.readFile(path.resolve(__dirname, 'student.json'),'utf-8');
        return JSON.parse(dataString);
    }
    catch(err){
        // console.log('Chưa có dữ liệu!')
        console.log(err)
        return [];
    }
}
// Viết dữ liệu vào file
const writeData= async(data)=>{
    try {
        await fs.promises.writeFile(path.resolve(__dirname, 'student.json'), JSON.stringify(data));
    }
    catch(err){
        throw(err)
    }
}

// Thêm SV
const addNewStudent=async(newStudent)=>{
    try{
        newStudent.id=uuid.v4();
        if(!fs.existsSync(path.resolve(__dirname, 'student.json'))){
            const newData=[newStudent];
            await fs.writeData(newData);
            return 0;
        }
        const data= await getAll();

        data.push(newStudent);
        await writeData(data)
    }
    catch(err){
        console.log("err" ,err)
    }
}

// addNewStudent(newStudent)
// Tìm sv bằng id
const findUserById=(allUser,idUser)=> allUser.findIndex(({id})=> id===idUser)

// Sửa thông tin sinh viên
const updateStudent= async (student)=>{
    try{
        const {id: userId, ...dataUpdate}=student;
        if(!userId){
            throw new Error("Id is required")
        }
        const allUser=await getAll();

        const indexUser=findUserById(allUser, userId);
        if(indexUser===-1) throw new Error("User not found")

        allUser[indexUser]={
            ...allUser[indexUser],
            ...dataUpdate
        }
        
        // const newData=allUser.map(user=>{
        //     if(user.id===userId){
        //         return{
        //             ...user,
        //             ...dataUpdate
        //         }
        //     }
        // })
        await writeData(allUser)
    }
    catch(err){
        console.log("err", err)
    }
};

const main=()=>{
    const newStudent={
        age:21,
        "id":"6d0b306d-9e67-4b0b-9223-439d4afe9ced"
    }
    updateStudent(newStudent)
};
main();
// // Tạo file
// fs.writeFile('student.json',`[{"name":"Minh","age":21}]`,function(err){
//     if(err) throw err
//     console.log('new file OK');
    
// })

// // Đọc file
// fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', (err, data) => {
//     const dataConvert= JSON.parse(data)
//     console.log("Danh sách học sinh:", dataConvert);

// })

// // Thêm SV
// fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', (err, data) => {
//     const dataConvert= JSON.parse(data)
//     // console.log("Danh sách học sinh:", dataConvert);

//     dataConvert.push({name:"Minh", age:21})
//     dataAdd=JSON.stringify(dataConvert);

//     fs.writeFile(path.resolve(__dirname, 'student.json'), dataAdd, function (err) {
//         if (err) return console.log(err);
//         console.log("===Success===");
//     });
// })

// // Sửa SV theo tên
// fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', (err, data) => {
//     const dataConvert= JSON.parse(data)
//     // console.log("Danh sách học sinh:", dataConvert);

//     dataUpdate={name:"abc", age:"30"};
//     for(const student in dataConvert){
//         if(dataConvert[student].name===dataUpdate.name){
//             dataConvert.splice(student,1);
//             dataConvert.push(dataUpdate)
//             let dataSave=JSON.stringify(dataConvert);
//             fs.writeFile(path.resolve(__dirname, 'student.json'), dataSave, function (err) {
//                 if (err) return console.log(err);
//                 console.log("===Update success===");
//             });
//         }
//     }
// })

// // Xóa SV theo tên
// fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', (err, data) => {
//     const dataConvert= JSON.parse(data)
//     // console.log("Danh sách học sinh:", dataConvert);

//     const dataDelete={name:"cde"}
//     for(const student in dataConvert){
//         if(dataConvert[student].name===dataDelete.name){
//             dataConvert.splice(student,1);
//             let dataDelete=JSON.stringify(dataConvert);
//             fs.unlink(path.resolve(__dirname, 'student.json'), function (err) {
//                 if (err) throw err;
//             });
//             fs.writeFile(path.resolve(__dirname, 'student.json'), dataDelete, function (err) {
//                 if (err) return console.log(err);
//                 console.log("===Delete success===");
//             });
//         }
//     }
// })

// // Chỉnh sửa file (Nối thêm vào đuôi file)
// fs.appendFile(path.resolve(__dirname, 'student.json'), 'appendFile test', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });


// // Xóa file

// fs.unlink(path.resolve(__dirname, 'student.json'), function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });