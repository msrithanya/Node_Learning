import express from "express"
import bodyParser, { urlencoded } from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname =dirname(fileURLToPath(import.meta.url))
const app=express();
const port=3000;
app.bodyParser(urlencoded({extended:true}))
 
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post('/submit')
app.listen(port,(req,res)=>{
    console.log("listening")
})
