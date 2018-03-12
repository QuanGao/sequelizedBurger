const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const routes = require("./controllers/burgersController.js");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

db.sequelize.sync({force: true}).then(function(){
        app.listen(PORT, function() {
            console.log("App listening on PORT " + PORT);
        });
    }
)

