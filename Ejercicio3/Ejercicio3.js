function diferenciaEntreNumeros(num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor ingresa el primer número: ', (numero1) => {
  rl.question('Por favor ingresa el segundo número: ', (numero2) => {
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    console.log('La diferencia entre los dos números es: ', diferenciaEntreNumeros(numero1, numero2));
    rl.close();
  });
});
