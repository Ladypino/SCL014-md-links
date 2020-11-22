const File = require("./files");
const path = require("path");

const Route = (routeE) => {
  const routeAbsolute = path.isAbsolute(routeE);
  if (routeAbsolute === true) {
    File(routeE);
  } else {
    const routeResolve = path.resolve(routeE);
    const routeNormalized = path.normalize(routeResolve);
    File(routeNormalized);
  }
};

module.exports = Route;
