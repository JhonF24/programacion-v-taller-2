function esParOImpar(numero) {
    if(numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor ingresa un número: ', (numero) => {
  numero = parseInt(numero);
  console.log(esParOImpar(numero));
  rl.close();
});
