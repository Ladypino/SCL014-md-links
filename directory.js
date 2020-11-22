const fs = require("fs");
const Route = require("./routing");
const RouteExact = __dirname;

const Directory = () => {
    fs.readdir(RouteExact, (err, files) => {
     // se crea primera funcion para leer directorio con la funcion readdir se pasan condicionales .include para que nos lea e incluya archivos .md 
  
    
      if (err) {
        console.log(errono);
      } 
      else {
        const FilesMD = files.filter( FilesMD=> FilesMD.includes('.md'))
          // se filtra y se rutea a archivo
          
        FilesMD.forEach(archivo => {Route(archivo); });
       
      }
    });
  };
 

  

   module.exports = Directory;