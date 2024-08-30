
const mongoose = require("mongoose")
const jobseekerUser = new mongoose.Schema({
    firstName : {
        type : String ,
        required : true
    },
    lastName : {
        type : String ,
    },
    email : {
        type : String ,
        required : true,
        unique : true 
    },
    phoneNumber : {
        type : String ,
        required : true
    },
    qualification : {
        type : String
    },
    skills : {
        type : String
    },
    resume : {
        type: Buffer,
        required : true
    }
})
const UserModel = mongoose.model("User" , jobseekerUser)
module.exports = UserModel