import express from "express"
const app=express();
const port=3000;

const logger=(req,res,next)=>{
    console.log("requested method: ",req.url);
    next();
};
app.use(logger);

app.get('/rfr',(req,res)=>{
          res.send("hey");
})

app.listen(port,()=>{
    console.log("listening")
})