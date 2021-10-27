
const {crearArchivo} = require("./helpers/multiplicar");
const argv= require("./config/yargs.js");

console.clear();
//const base=6;

crearArchivo(argv.b,argv.l,argv.h)
        .then(nombreArchivo=>console.log(nombreArchivo,"creado"))
        .catch(err=>console.log(err));