const fs = require("fs");
const path = require("path");

const Directory = require("./Directory");



const searchAndCheckRoute = (filePath) => {
    
    const imDirectory = fs.statSync(filePath);
    
    if (imDirectory.isDirectory()) {filePath= resolveSearchAndCheck(filePath);
       
        Directory(filePath); 

    } 
    else if (imDirectory.lisFile()) {Files(filePath)
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





  


module.exports = searchAndCheckRoute;