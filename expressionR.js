const validatingALLTheLinks = require("./validate");


module.exports = (data, file) => {
  
  const expressionRURL = 
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gm;
   //regular expression finally found in https://regexlib.com/DisplayPatterns.aspx?AspxAutoDetectCookieSupport=1
  
  const arrayAllLinks = [];

  const obtainLinks = data.match(expressionRURL);

  obtainLinks.forEach((object) => {
    const textCheking = new URL(object);
    arrayAllLinks.push({ 
       File: file,
       Link: object,
       ChekingT: textCheking.host});
  });




  validatingALLTheLinks(arrayAllLinks);

};












