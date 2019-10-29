var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var routes = require("./controllers/burgerController.js")
var PORT = process.env.PORT || 3030;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});