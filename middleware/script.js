import bodyParser from "body-parser";
import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname=dirname(fileURLToPath(import.meta.url))

const app=express();
const port=3001;
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.listen(port,()=>{
    console.log(`${port} server is running`);
})
app.post("/login",(req,res)=>{
console.log(req.body)
res.sendFile(__dirname+"/inner.html")
}
)
