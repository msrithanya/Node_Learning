import express from "express"
import {dirname} from "path"
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
 const app=express();
 const port=3000;
app.use(bodyParser.urlencoded({extended:true}))
 app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
 })
 app.post('/submit',(req,res)=>{
console.log(req.body)
 const fullName = req.body.firstname + " " + req.body.lastname;
  res.send(`<h1>Your name is: ${fullName}</h1>`);
 })
 app.listen(port,()=>{
    console.log("listening");
 })