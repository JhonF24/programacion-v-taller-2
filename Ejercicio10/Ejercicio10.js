function determinarTipoImpositivo(rentaAnual) {
    if (rentaAnual < 10000) {
        return '5%';
    } else if (rentaAnual >= 10000 && rentaAnual < 20000) {
        return '15%';
    } else if (rentaAnual >= 20000 && rentaAnual < 35000) {
        return '20%';
    } else if (rentaAnual >= 35000 && rentaAnual < 60000) {
        return '30%';
    } else {
        return '45%';
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor ingresa tu renta anual en euros: ', (rentaAnual) => {
  rentaAnual = parseFloat(rentaAnual);

  let tipoImpositivo = determinarTipoImpositivo(rentaAnual);
  console.log(`Tu tipo impositivo es: ${tipoImpositivo}`);

  rl.close();
});
