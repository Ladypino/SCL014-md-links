module.exports = {
    AllLinksUniquesAndTotal: (object) => {
      let AllLinksStats = object.map((orderUniquesandTotal) => orderUniquesandTotal.link);
      const arrayAllLinksUnique = new Set(AllLinksStats);
      const allLinksUnique = Array.from(new Set(arrayAllLinksUnique));
  
      return {
        Total: object.length,
        Unique: allLinksUnique.length,
      };
    },
  
    AllLinksBroken: (object) => {
      let AllLinksBrokenStats = object.filter((object) => 
      object.NumberVf >= 400);
      
      const AllLinksTotalAndUnique = 
      module.exports.AllLinksUniquesAndTotal(object);
  
      return {
        Total: AllLinksTotalAndUnique.Total,
        Unique: AllLinksTotalAndUnique.Unique,
        Broken: AllLinksBrokenStats.length,
      };
    },
  };
  
