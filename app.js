const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const generateTrashtalk = require("./generate_trashtalk.js");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//route setting
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const options = req.body;
  const trashtalk = generateTrashtalk(options);
  res.render("index", { options, trashtalk });
});

app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`);
});
