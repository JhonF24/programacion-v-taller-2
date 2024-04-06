function debeTributar(edad, ingresosMensuales) {
    if (edad > 16 && ingresosMensuales >= 1000) {
        return true;
    } else {
        return false;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor ingresa tu edad: ', (edad) => {
  edad = parseInt(edad);

  rl.question('Por favor ingresa tus ingresos mensuales en euros: ', (ingresosMensuales) => {
    ingresosMensuales = parseFloat(ingresosMensuales);

    let tributa = debeTributar(edad, ingresosMensuales);

    if (tributa) {
        console.log('Debes tributar el impuesto.');
    } else {
        console.log('No debes tributar el impuesto.');
    }

    rl.close();
  });
});
