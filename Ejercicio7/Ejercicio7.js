function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

function determinarEstado(promedio) {
    if (promedio < 5) {
        return "Suspenso";
    } else if (promedio >= 5 && promedio <= 7) {
        return "Aprobado";
    } else {
        return "Notable";
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor ingresa la nota del primer trimestre: ', (nota1) => {
  nota1 = parseFloat(nota1);

  rl.question('Por favor ingresa la nota del segundo trimestre: ', (nota2) => {
    nota2 = parseFloat(nota2);

    rl.question('Por favor ingresa la nota del tercer trimestre: ', (nota3) => {
      nota3 = parseFloat(nota3);

      let promedio = calcularPromedio(nota1, nota2, nota3);
      let estado = determinarEstado(promedio);

      console.log(`El promedio es: ${promedio.toFixed(2)}`);
      console.log(`El estudiante está: ${estado}`);

      rl.close();
    });
  });
});
