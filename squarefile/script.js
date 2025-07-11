import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 5000;
let uname;
let pass;
app.use(bodyParser.urlencoded({ extended: true }));
const __dirname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/users.html");
});

app.listen(port, () => {
  console.log(`${port} server is listening:)`);
});
app.post("/signin", (req, res) => {
  uname = req.body.username;
  pass = req.body.password;
  res.sendFile(__dirname + "/signin.html");
});
// document.getElementById("id")
app.post("/signup", (req, res) => {
  if (req.body.susername == uname && req.body.spassword == pass) {
    res.sendFile(__dirname + "/success.html");
  } else {
    res.send(`<h1>Try again venna maganeaaa</h1>`);
  } 
  //
});
