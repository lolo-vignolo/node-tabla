const { multiplicar } = require('./helpers/multiplicar');

const { argv } = require('./config/yargs');

const base = argv.base;
const listed = argv.listed;
const hasta = argv.hasta;

console.log(base, listed, hasta);

multiplicar(base, listed, hasta)
  .then((salida) => console.log(salida))
  .catch((err) => console.log(err));
