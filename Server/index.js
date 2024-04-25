const express=require("express");
const cors=require("cors")
const mongoose=require("mongoose");
const AuthRoutes=require("./Routes/AuthRoutes")
const cookieParser = require("cookie-parser");

const app=express();

app.listen(4000,()=>{
    console.log("server connected to port 4000");
});

mongoose.connect("mongodb://localhost:27017/e-connect",{
     //useNewUrlParser:true,
    // useUnifiedTopology:true,
}).then(()=>{
    console.log("mongo connected");
}).catch((err)=>console.log(err.message));

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true,
}));

app.use(cookieParser());
app.use(express.json());
app.use("/",AuthRoutes);
