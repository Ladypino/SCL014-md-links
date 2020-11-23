const fs = require("fs");
const path = require("path");


const Files = require("./files");


const RouteExact = __dirname;//ruta estricta




const searchAndCheckRoute = (filePath) => {
    
    const imDirectory = fs.statSync(filePath);
    
    if (imDirectory.isDirectory()) {filePath= resolveSearchAndCheck(filePath);
       
        Directory(filePath); 

    } 
    else if (imDirectory.isFile()) {Files(filePath)
    } 
    else {console.error(error);
    }
  };

  const resolveSearchAndCheck = (pathOrRoute) => {
    
    const resultFinish = path.isAbsolute(pathOrRoute);
    
    if (resultFinish) {

      return pathOrRoute;
    } 
    
    else 
    {
      const  routeAbResolve  = path.resolve(pathOrRoute);
      const  routeAbNormalize  = path.normalize(routeAbResolve);
     
      return  routeAbNormalize ;
    }
  };




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
          
        FilesMD.forEach(archivo => {searchAndCheckRoute(archivo); });
       
      }
    });
  };
 

  


module.exports = searchAndCheckRoute;