const fs = require('fs');

const multiplicar = async (base = 5, listed, hasta) => {
  let salida = '';

  if (base <= hasta && base > 0) {
    for (let i = 1; i < 11; i++) {
      salida += `${i} x ${base} = ${i * base}\n`;
    }
    try {
      await fs.writeFileSync(`./salidas/table-${base}.txt`, salida); //primero arg el path, luego el que quiero escribir

      if (listed) {
        console.clear();
        console.log('==================');
        console.log(`tabla de ${base}`);
        console.log(salida);
        console.log('==================');
      }
      return console.log(` la tabla del ${base} was created`);
    } catch (error) {
      throw error;
    }
  } else {
    console.log('La base debe ser mayor que 0 y menor que el numero hasta');
  }
};

module.exports = { multiplicar };
