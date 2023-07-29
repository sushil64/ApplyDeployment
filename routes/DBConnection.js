const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

let connectToDataBase = async () => {
    try {
        await mongoose.connect(process.env.dbConnectionString);
        console.log("DB Connection Succesfull");
    }
    catch (err) {
        console.log("DB Connection Failed");
    };
};

let userSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    country: String,
    department: String,
    age: Number,
    profilePic: String,
});

let userData = new mongoose.model("employeesdata", userSchema);

connectToDataBase();

module.exports = userData;