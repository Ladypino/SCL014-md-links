const fs = require("fs");
const ruta = __dirname;

const readDirec = () => {
    fs.readdir(ruta, (err, files) => {
      if (err) {
        console.log("No se puede Leer  T.T " + err);
      } else {
        console.log(files);
      }
    });
  };

  module.exports = readDirec;