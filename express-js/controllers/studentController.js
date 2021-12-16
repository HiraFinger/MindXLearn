var fs = require("fs");
const path = require("path");
const uuid = require("uuid");

const getAll = async () => {
  try {
    const dataString = await fs.promises.readFile(path.resolve(__dirname, "student.json"), "utf-8");

    return JSON.parse(dataString);
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Viết dữ liệu vào file
const writeData = async (data) => {
  try {
    await fs.promises.writeFile(path.resolve(__dirname, "student.json"), JSON.stringify(data));
  } catch (err) {
    throw err;
  }
};

const addNewStudent = async (newStudent) => {
  try {
    newStudent.id = uuid.v4();
    if (!fs.existsSync(path.resolve(__dirname, "student.json"))) {
      const newData = [newStudent];
      await fs.writeData(newData);
      return 0;
    }

    const data = await getAll();

    data.push(newStudent);
    await writeData(data);
  } catch (err) {
    console.log("err", err);
  }
};

const findUserById = (allUser, idUser) => allUser.findIndex(({ id }) => id === idUser);
const findStudent= async(idStudent)=>{
  try{
    const { id: userId,...dataStudent} = idStudent;
    if (!userId) {
      throw new Error("Id is required");
    }
    const allStudent = await getAll();
    const indexStudent = findUserById(allStudent, userId);
    if (indexStudent === -1) throw new Error("User not found");
    return JSON.stringify(allStudent[indexStudent])
  }
  catch (err) {
    console.log("err", err);
  }
}


const updateStudent = async (student) => {
  try {
    const { id: userId, ...dataUpdate } = student;
    if (!userId) {
      throw new Error("Id is required");
    }
    const allUser = await getAll();

    const indexUser = findUserById(allUser, userId);
    if (indexUser === -1) throw new Error("User not found");

    allUser[indexUser] = {
      ...allUser[indexUser],
      ...dataUpdate,
    };

    await writeData(allUser);
  } catch (err) {
    console.log("err", err);
  }
};

const deleteStudent=async(student)=>{
    try{
        const { id: userId} = student;
        if (!userId) {
            throw new Error("Id is required");
        }
        const allStudent=await getAll();
        const indexUser = findUserById(allStudent, userId);
        if (indexUser === -1) throw new Error("User not found");
        allStudent.shift(allStudent[indexUser])
        await writeData(allStudent);
    }
    catch(err){
        console.log("err", err);
    }
}

module.exports.getAll = getAll;
module.exports.addNewStudent = addNewStudent;
module.exports.updateStudent = updateStudent;
module.exports.deleteStudent = deleteStudent;
module.exports.findStudent = findStudent;
