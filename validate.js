#!/usr/bin/env node
const fetch = require("node-fetch");
let fetchUrl = fetch.fetchUrl;
const { AllLinksUniquesAndTotal, AllLinksBroken } = require("./stats");




module.exports = (arrayAllLinks) => {

  const validatingALLTheLinks
  = arrayAllLinks.map((object) => {
    return fetch(object.Link)
    //utilizamos la libreria node-fech para ubicar y ir a buscar literalmente nuestros enlaces
      .then((valid) => {
        return {
          linkUrl: valid.url,
          fileRoute: object.File,
          NumberVf: valid.status,
          textVf: valid.statusText,
          
        };
       
      } ,
     
      )
   // mapeamos en busqueda de nuestros links dentro de su contenedor los valorificamos para poder renderizar y volver a utilizar
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
  
  Promise.all(validatingALLTheLinks).then((valid) => {// usamos promise.all para realizar la promesa directa
    let ConditionVS = {
      stats: false, validate: false
    };
//damos condicion o estado a validate y stats
    
if (process.argv.length > 2) {
      process.argv.forEach((
        writtenLine) => {
        if (
          writtenLine === "--stats") { ConditionVS.stats = true;}
         
        if (
         
          writtenLine === "--validate") { ConditionVS.validate = true;}
      });
    }
//damos condicionales para poder validar cuando se escriba la palabra condicionada

    if ( ConditionVS.stats === true 
       &&  ConditionVS.validate === false) 

       { const  allStatsGetting = AllLinksUniquesAndTotal(valid);
      
        console.log(allStatsGetting);
    }
// condicion verdadero stats y faldo validate nos mostrara solo total y unique 

    if (  ConditionVS.stats === true  && 
      ConditionVS.validate === true
         ) 
       {const allLinksBrokensGetting
       = AllLinksBroken(valid);
      
       console.log(allLinksBrokensGetting);
    }

    //condicionamos validate true y stats true nos muestra stats completo unique total y broken

    valid.forEach((object) => {
      if (
        ConditionVS.validate ) {
        
          console.log(
          
          `${" La ruta de su archivo es " + object.fileRoute  } 
          ${" La URL de su archivo es " + object.linkUrl  } 
          ${" El codigo de su archivo es " + object.NumberVf  } 
          ${" La validacion  su archivo esta " + object.textVf  }
         `

        );
      }
      //renderizado final
      
      else {
        console.log
        (`${object.fileRoute}
         ${object.linkUrl}
         ${object.textVf} 
        ${object.NumberVf}
      `
         );
         
      }
    });
  }
  );



} 

