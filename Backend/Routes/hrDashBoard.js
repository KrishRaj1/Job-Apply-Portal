const express = require("express")
const User = require("../Model/User")
const router = express.Router()

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