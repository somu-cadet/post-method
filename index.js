const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=(2000);
 app.use(bodyParser.urlencoded({
 	extended:true
 }))

 app.use(bodyParser.json())
 app.use(cors())
app.get("/",(req,res)=>{
	res.send("dummy route")
})
app.post("/newData",(req,res)=>{
    //const name=req.body.name,age=req.body.age
    const {name,password,bikename}=req.body
	console.log(name,password,bikename)
    res.send("added succesful")
})
app.listen(port,()=>console.log("server is running on port 2000"))