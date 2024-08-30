const express = require("express")
const User = require("../Model/User")
const router = express.Router()
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({storage : storage})
router.post('/user' , upload.single('resume'), async (req,res) => {
    const {firstName , lastName , email , phoneNumber , skills , qualification } = req.body
    const resumeFile = req.file.buffer
    const user = await User.findOne({email : email})
    if(user){
        return res.status(403)
        .json({error : "You already applied for the job"})
    }
    const jobSeekerData ={firstName,lastName,email,phoneNumber,skills,qualification , resume : resumeFile}
    const newUser = await User.create(jobSeekerData)
    const userToReturn =  newUser.toJSON()
    res.status(200).json(userToReturn)
    return
})
router.get('/resume/:email' , async(req ,res) => {
    try{
      const user =  await User.findOne({email : req.params.email})
      if(!user){
       return res.status(403).json({error :"User not exist with this email"})
      }
      res.set('Content-Type' , 'application/pdf')
      res.send(user.resume)
    }catch(error){
        res.status(500).json({error : error.message})
    }
})
module.exports = router