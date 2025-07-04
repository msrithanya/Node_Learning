import express from 'express'
var app=express();
const port =3009;
app.get("/",(req,res)=>{
    res.send("rithu")
})
app.get("/about",(req,res)=>{
    res.send("about rithu")
})
app.get("/contact",(req,res)=>{
    res.send("this is contact page")
})
app.listen(port,function(){
    console.log(`Rithu server is running ${port}`);
})