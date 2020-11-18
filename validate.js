const fetch = require("node-fetch");

module.exports = (arrayLinks) => {
  const linksValidate = arrayLinks.map((object) => {
    return fetch(object.Link)
      .then((res) => {
        return {
          linkHref: res.url,
          fileRoute: object.File,
          NumberVf: res.status,
          textVf: res.statusText,

        };
      })
      .catch((fail) => {
        return {
          linkHref: object.Link,
          fileRoute: object.File,
          codeFail: fail.code,
          textFail: fail.errno,
        };
      });
  });

  Promise.all(linksValidate).then((resp) => {
    let allLinesvalidate = "";
    if (process.argv.length > 3) {
      allLinesvalidate = process.argv[3];
    }

    resp.forEach((object) => {
      if (allLinesvalidate === "--validate") {
        console.log(
          `${object.fileRoute}
           ${object.linkHref}
            ${object.textVf} 
            ${object.NumberVf}`
        );
      } else {
        console.log
        (`${object.fileRoute}
         ${object.linkHref}`);
      }
    });
  });
};