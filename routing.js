const readingFile = require("./files");
const path = require("path");

const pathAbsolute = (ruta) => {
  const pathIsAbsolute = path.isAbsolute(ruta);
  if (pathIsAbsolute === true) {
    readingFile(ruta);
  } else {
    const pathResolve = path.resolve(ruta);
    const pathNormalized = path.normalize(pathResolve);
    readingFile(pathNormalized);
  }
};

module.exports = pathAbsolute;