
var fs = require('fs');
const path = require('path');


// Tạo file
fs.writeFile('sinhvien.json',`[{"name":"Minh","age":21}]`,function(err){
    if(err) throw err
    console.log('new file OK');
    
})

// Đọc file
fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', (err, data) => {
    const dataConvert= JSON.parse(data)
    console.log("Danh sách học sinh:", dataConvert);

    // Thêm SV
    dataConvert.push({name:"Minh", age:21})
    dataAdd=JSON.stringify(dataConvert);

    fs.writeFile(path.resolve(__dirname, 'student.json'), dataAdd, function (err) {
        if (err) return console.log(err);
        console.log("===Success===");
    });

    // Sửa SV theo tên
    dataUpdate={name:"abc", age:"30"};
    for(const student in dataConvert){
        if(dataConvert[student].name===dataUpdate.name){
            dataConvert.splice(student,1);
            dataConvert.push(dataUpdate)
            let dataSave=JSON.stringify(dataConvert);
            fs.writeFile(path.resolve(__dirname, 'student.json'), dataSave, function (err) {
                if (err) return console.log(err);
                console.log("===Update success===");
            });
        }
    }

    // Xóa SV theo tên (comment hết các hàm sửa SV, thêm SV, sửa file và xóa file mới dùng được)
    const dataDelete={name:"cde"}
    for(const student in dataConvert){
        if(dataConvert[student].name===dataDelete.name){
            dataConvert.splice(student,1);
            let dataDelete=JSON.stringify(dataConvert);
            fs.unlink(path.resolve(__dirname, 'student.json'), function (err) {
                if (err) throw err;
            });
            fs.writeFile(path.resolve(__dirname, 'student.json'), dataDelete, function (err) {
                if (err) return console.log(err);
                console.log("===Delete success===");
            });
        }
    }

})

// Chỉnh sửa file (Nối thêm vào đuôi file)

fs.appendFile(path.resolve(__dirname, 'student.json'), 'appendFile test', function (err) {
    if (err) throw err;
    console.log('Saved!');
});


// Xóa file

fs.unlink(path.resolve(__dirname, 'student.json'), function (err) {
    if (err) throw err;
    console.log('File deleted!');
});