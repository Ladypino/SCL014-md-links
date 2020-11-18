const fs = require("fs");
const path = require("path");
const expressionRURL = require("./expressionR");
const rute = process.argv[2];

const Files = (file) => {
  fs.readFile(file, "utf8", (err, data) => {
    path.extname(file);
    // console.log(path.extname(file));
    if (file.includes(".md")) {
      expressionRURL(data, file);
      console.log(path.extname(file));
    } else {
      console.log(err);
    }
  });




 
}
module.exports = Files;
