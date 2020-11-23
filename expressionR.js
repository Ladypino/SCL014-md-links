const validatingALLTheLinks = require("./validate");
const File = require("./files");
const path = require("path");


module.exports = (data, file) => {
  
  const expressionRURL = 
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gm;
   //regular expression finally found in https://regexlib.com/DisplayPatterns.aspx?AspxAutoDetectCookieSupport=1
  
  const arrayAllLinks = [];
  //construimos un nuevo array vacio para ingresar nuestro array de todos los links a obtener

  const obtainLinks = data.match(expressionRURL);
//creamos variable contenedora  y le pasamos .match para unir nuestros links con la busqueda mediante expres regular
  
obtainLinks.forEach((object) => {
    
    arrayAllLinks.push({ 
       File: file,
       Link: object,
      });
  });
// pusheamos y obtenemos nuestro linkurl y nuestro archivo


//union contenedor de todos nustros links con los links
  validatingALLTheLinks(arrayAllLinks);








};












