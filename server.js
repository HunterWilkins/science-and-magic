const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();

app.use(express.static("public"));

// Middleware
app.use(express.urlencoded({extended : true}));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/artwork", function(req, res){
    res.sendFile(path.join(__dirname, "/public/artwork.html"));
});

app.get("/code", function(req, res){
    res.sendFile(path.join(__dirname, "/public/code.html"));
});

app.listen(PORT, () => {
    console.log(`Science and Magic Server now Listening on Port ${PORT}.`);
});