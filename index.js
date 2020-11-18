const Route= require("./routing");
const readDirec=require('./directory')
const file = process.argv[2];


readDirec(file);

Route(file);

