import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = '';

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req,res,next){
  console.log(req.body);
  bandName = req.body["street"] + ' ' + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.post("/submit", (req,res)=>{
  //console.log(req.body);
  res.send(`
  <h1>Your Band name is: </h1>
  <h2>${bandName}✌️</h2>
  <p>We play all Sundays afternoons in Jacksonville Polo Club, 30 minutes from town.</p>
  `);
});

app.get("/", (req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
