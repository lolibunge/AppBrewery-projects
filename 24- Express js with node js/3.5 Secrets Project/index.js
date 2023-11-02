//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorize = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req,res,next){
    const password = req.body["password"];
    if (password === "foobar99") {
        userIsAuthorize = true;
    } 
    next();
}

app.use(passwordCheck);

app.post("/check",(req,res) =>{
    console.log(req.body);
    if (userIsAuthorize) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
});

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});