const File = require("./files");
const path = require("path");

//camino o ruta absoluta se ocupa .isAbsolute para poder darle este valor agregado de absoluta
const Route = (routeA) => {
  const routeAbsolute = path.isAbsolute(routeA);
  
  //condicionamos la ruta verdadero ruta absoluta sino la convierte

  if (routeAbsolute === true) {
    File(routeA);
  } 
  else {
    const routeAResolve = path.resolve(routeA);

    const routeANormalized = path.normalize(routeAResolve);

    File(routeANormalized);
  }
};

module.exports = Route;
