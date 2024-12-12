//pass = PxE8CFaYye2j7pN8

const express = require("express");
const mongoose = require("mongoose"); 
const router = require("./Routes/UserRoutes");


const app = express();

//Middleware
app.use(express.json());  //make the data we given from postman as responsive 
app.use("/users",router);

mongoose.connect("mongodb+srv://admin:PxE8CFaYye2j7pN8@cluster0.iqgsx.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=> console.log(err));