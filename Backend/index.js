 require("dotenv").config()
const express = require("express");
const app = express()
const cors = require("cors")
const applyRoute = require("./Routes/jobSeeker")
const resumeCollection = require("./Routes/hrDashBoard")
const mongoose = require("mongoose")
const PORT = 9000
mongoose.connect("mongodb+srv://shivharekrishraj:"+process.env.KEY+"@cluster0.nofsvmo.mongodb.net/Job?retryWrites=true&w=majority&appName=Cluster0", 
{
   useNewUrlParser : true,
   useUnifiedTopology : true,
  // bufferTimeoutMS: 30000

}).then((x) => {
    console.log("Mongo DB is connected")
}).catch((err) => {
    console.log("MongoDB is not connected")
})
const allowedOrigins = ['https://job-apply-portal-yrqp.vercel.app'];

app.use(cors({
   origin: 'https://job-apply-portal-yrqp.vercel.app',
   methods: ['GET', 'POST'],
   allowedHeaders: ['Content-Type'],
 }));
 
app.use(express.json())
app.get('/' , (req,res)=> {
    res.send("This is home")
})
app.use('/apply', applyRoute)
app.use('/hr', resumeCollection)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(PORT , () => console.log(`Server has been started at port ${PORT}`))
