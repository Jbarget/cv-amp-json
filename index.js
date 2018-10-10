const fs = require("fs");
const handlebars = require("handlebars");

const context = fs.readFileSync("cv.json").toString("utf-8");
const source = fs.readFileSync("cv.hbs").toString();
var template = handlebars.compile(source);

var html = template(JSON.parse(context));
fs.writeFileSync("index.html", html);
