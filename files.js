const fs = require("fs");
const path = require("path");
const expressionRURL = require("./expressionR");


const Files = (file) => {
  fs.readFile(file, "utf8", (err, data) => {
    path.extname(file);
    if (file.includes(".md")) {
      expressionRURL(data, file);
    } else {
      throw err;
    }
  });
};

module.exports= Files;



 
