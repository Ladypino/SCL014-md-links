
const Route = require("./routing");
const RouteExact = __dirname;//ruta estricta
const fs = require("fs");



const Directory = () => {
    fs.readdir(RouteExact, (err, files) => {
     // se crea primera funcion para leer directorio con la funcion readdir se pasan condicionales
  
    
      if (err) {
        console.log(err);
      } 
      else {
        // .include para determinar si la matriz incluye elementos md
        const FilesMD = files.filter( FilesMD=> FilesMD.includes('.md'))
          // se filtra y se rutea a archivo
          
        FilesMD.forEach(archivo => {Route(archivo); });
       
      }
    });
  };
  module.exports=Directory;