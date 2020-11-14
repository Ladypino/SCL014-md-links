const fs = require("fs");
const path = require("path");
const regExpressionUrl = require("./regularExpression");

const readFiles = (file) => {
  fs.readFile("README.md", "utf8", (err, data) => {
    path.extname(file);
    console.log(path.extname(file));
    if (file.includes(".md")) {
      regExpressionUrl(data, file);
    } else {
      throw err;
    }
  });
};

module.exports = readFiles;
