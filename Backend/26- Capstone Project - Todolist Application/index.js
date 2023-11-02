import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.post("/submit", (req, res) => {
    const title = req.body["title"];
    const body =  req.body["text"];
    const author =  req.body["author"];
    res.render("index.ejs", { title: title , body: body, author: author});
});
  

app.listen(port, ()=>{
    console.log(`Server is runing on  ${port}.`);
});