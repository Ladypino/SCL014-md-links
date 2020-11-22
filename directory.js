const fs = require("fs");
const Route = require("./routing");
const RouteExact = __dirname;

const Directory = () => {
    fs.readdir(RouteExact, (err, files) => {
      if (err) {
        console.log( err);
      } else {
        const FilesMD = files.filter( FilesMD=> FilesMD.includes('.md'))
        FilesMD.forEach(archivo => {Route(archivo); });
       
      }
    });
  };
 

  

   module.exports = Directory;