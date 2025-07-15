import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get('/', (req, res) => {
    const today = new Date();
    const day = today.getDay(); // not getDate()

    if (day === 0 || day === 6) {
        res.render("index.ejs", { names: "weekends" });
    } else {
        res.render("index.ejs", { names: "weekdays" });
    }
});

app.listen(port, () => {
    console.log("listening");
});
