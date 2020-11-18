const File = require("./files");
const path = require("path");

const Route = (ruta) => {
  const routeAbsolute = path.isAbsolute(ruta);
  if (routeAbsolute === true) {
    File(ruta);
  } else {
    const routeResolve = path.resolve(ruta);
    const routeNormalized = path.normalize(routeResolve);
    File(routeNormalized);
  }
};

module.exports = Route;