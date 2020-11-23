const File = require("./files");
const path = require("path");

//camino o ruta absoluta se ocupa .isAbsolute para poder darle este valor agregado de absoluta
const Route = (routeA) => {
  const routeAbsolute = path.isAbsolute(routeA);
  //comenzamos utilizando .isAbsolute para determinar si la ruta es  absoluta
  
  //condicionamos la ruta a verdadero,sino la convierte

  if (routeAbsolute === true) {
    File(routeA);
  } 
  else {
    const routeAbResolve = path.resolve(routeA); 
//  utilizamos .resolve  para resolver una ruta absoluta y si no lo es la busca hasta encontrarla
    
   const routeAbNormalized = path.normalize(routeAbResolve);
//  utilizamos .normalize   para resolver reducir codigo y slashes 
    File(routeAbNormalized);
  }
};

module.exports = Route;
