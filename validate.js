#!/usr/bin/env node
const fetch = require("node-fetch");
let fetchUrl = fetch.fetchUrl;
const { AllLinksUniquesAndTotal, AllLinksBroken } = require("./stats");

module.exports = (arrayAllLinks) => {



  const validatingALLTheLinks
  = arrayAllLinks.map((object) => {
    return fetch(object.Link)
      .then((valid) => {
        return {
          linkUrl: valid.url,
          fileRoute: object.File,
          ChekingT: object.ChekingT,
          NumberVf: valid.status,
          textVf: valid.statusText,
          
        };
       
      } ,
     
      )

      
      .catch((fail) => {
        return {
          linkUrl: fail.url,
          fileRoute: object.File,
          codeFail: fail.code,
          textFail: fail.errno,
        };
      });
  });

 /*  Promise.all(validatingALLTheLinks).then((valid) => {
    let writtenLine  = "";
    if (process.argv.length > 3) {
      writtenLine  = process.argv[3];
    }

    valid.forEach((object) => {
      if (
        writtenLine === "--validate") {
        console.log(
          
          `${" La ruta de su archivo es " + object.fileRoute  } 
          ${" La URL de su archivo es " + object.linkUrl  } 
          ${" El codigo de su archivo es " + object.NumberVf  } 
          ${" La validacion  su archivo esta " + object.textVf  }`

        );
      }
      
      
      else {
        console.log
        (`${object.fileRoute}
         ${object.linkUrl}
         ${object.textVf} 
        ${object.NumberVf}`
         );
         
      }
    });
  });
 */
  
  Promise.all(validatingALLTheLinks).then((valid) => {
    let processArgv = {
      validate: false,
      stats: false,
    };

    if (process.argv.length > 2) {
      process.argv.forEach((
        writtenLine) => {
        if (
          writtenLine === "--validate") {processArgv.validate = true;}
        if (
          writtenLine === "--stats") {processArgv.stats = true;}
      });
    }

    if (processArgv.stats === true 
       && processArgv.validate === false) 
       { const  allStatsGetting = AllLinksUniquesAndTotal(valid);
      
        console.log(allStatsGetting);
    }

    if (processArgv.validate === true
       && processArgv.stats === true) 
       {const allLinksBrokensGetting
       = AllLinksBroken(valid);
      
       console.log(allLinksBrokensGetting);
    }

    valid.forEach((object) => {
      if (
        processArgv.validate ) {
        console.log(
          
          `${" La ruta de su archivo es " + object.fileRoute  } 
          ${" La URL de su archivo es " + object.linkUrl  } 
          ${" El codigo de su archivo es " + object.NumberVf  } 
          ${" La validacion  su archivo esta " + object.textVf  }
          ${" La direccion es " + object.ChekingT }`

        );
      }
      
      
      else {
        console.log
        (`${object.fileRoute}
         ${object.linkUrl}
         ${object.textVf} 
        ${object.NumberVf}
        ${object.ChekingT}`
         );
         
      }
    });
  });



} 