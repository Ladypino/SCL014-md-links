const fs = require("fs");
const path = require("path");
const expressionRURL = require("./expressionR");


const Files = (file) => {
  fs.readFile(file, "utf8", (err, data) => {
    path.extname(file);
    // se crea funcion para leer archivos con la funcion readFile se pasan condicionales .include para que nos lea e incluya archivos .md
    
    if (file.includes(".md")) {
      expressionRURL(data, file);
      // le pasamos la expresion regular para match con .md
    } else {
      throw err;
    }
  });
};

module.exports= Files;



 
