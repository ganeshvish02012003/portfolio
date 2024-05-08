if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }

const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));

// let service_ID = process.env.SERVICE_ID
// let template_ID = process.env.SERVICE_ID
// let public_Key = process.env.SERVICE_ID

app.get("/", (req, res) => { 
    res.send("ROOT is working"); 
});

app.get("/GaneshVishwakarma", (req, res) => {
    res.render("index.ejs");
});


app.listen(8080, () => {
    console.log("sever is listing on port 8080");
  });
  