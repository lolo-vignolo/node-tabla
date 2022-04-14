const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number', // name of the argument
    demand: true, // if the argument is required
    describe: 'es la base d ela multiplicacion',
  })
  .option('l', {
    alias: 'listed',
    default: false,
    type: 'boolean',
    describe: 'Listar los numeros de la tabla',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    describe: 'Hasta que numero quieres la tabla',
  })
  .check((argv, options) => {
    if (argv.hasta < argv.base) {
      throw new Error('El numero hasta debe ser mayor que el numero base');
    }
    return true;
  })
  .check((argv, options) => {
    if (isNaN(argv.base) && argv.base < 0) {
      throw new Error('Base debe ser un numero Positivo');
    }
    return true;
  }).argv;

module.exports = { argv };
