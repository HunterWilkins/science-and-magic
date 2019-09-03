const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000
const app = express();

app.use(express.static("public"));

// Middleware
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// Handlebars

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/html")(app);

app.listen(PORT, () => {
    console.log(`Science and Magic Server now Listening on Port ${PORT}.`);
});