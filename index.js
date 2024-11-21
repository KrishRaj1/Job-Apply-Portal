const express = require('express');
require('dotenv').config()
const newsTitleRoute = require("./Routes/newsTitle")
const cors = require('cors')
const app = express();
const PORT = 8000;
app.use(cors())
app.use(express.json())
app.get('/' , (req,res)=>{
    res.send("Hello from app");
})
app.use('/news',newsTitleRoute)
app.listen( PORT , ()=>{
    console.log("Server is runing on 8000")
})