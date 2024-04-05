function determinarSigno(numero) {
    if(numero > 0) {
        return "El número es positivo";
    } else if(numero < 0) {
        return "El número es negativo";
    } else {
        return "El número es cero";
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor ingresa un número: ', (numero) => {
  numero = parseFloat(numero); // Convertir la entrada a número (puede ser entero o decimal)
  console.log(determinarSigno(numero));
  rl.close();
});
