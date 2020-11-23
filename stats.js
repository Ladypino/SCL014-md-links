module.exports = {
    AllLinksUniquesAndTotal: (object) => {
      let AllLinksStats = object.map((orderUniquesandTotal) => orderUniquesandTotal.ObjectLink);
      //se crea variable y se crea nuevo array para dar pie a los stats con el constructor Set como objeto de almacenamiento de estos
      const arrayAllLinksUnique = new Set(AllLinksStats);
      const allLinksUnique 
      = Array.from(new Set(arrayAllLinksUnique)); 
      //utilizamos  el metodo constructor Array.from  y creamos una nueva instancia de nuestro array que contiene todos los links para poder iterarlo y filtrar para cada estadistica
  
      return {
        Total: object.length,
        Unique: allLinksUnique.length,
      };
    },
  
    AllLinksBroken: (object) => {
        // finalmente filtramos y condicionamos mediante funcion para finalmente obtener los link rotos o broken
      let AllLinksBrokenStats = object.filter((object) => 
      object.NumberVf >= 400);

      // llamamos a la funcion que contiene uniques y total para poder unir con amnos comando(ver funcion en validate)
      const AllLinksTotalAndUnique = 
      module.exports.AllLinksUniquesAndTotal(object);
   
      // para finalmente return el arreglo completo con nuestra validacion mas nuestros stats
      return {
        Total: AllLinksTotalAndUnique.Total,
        Unique: AllLinksTotalAndUnique.Unique,
        Broken: AllLinksBrokenStats.length,
      };
    },
  };
  
