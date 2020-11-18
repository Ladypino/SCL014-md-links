const linksValidate = require("./validate");

module.exports = (data, file) => {
  const expressionRURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gm;
  const arrayLinks = [];
  const linksHave = data.match(expressionRURL);

  linksHave.forEach((object) => {
    arrayLinks.push({ File: file, Link: object });
  });

  linksValidate(arrayLinks);
};