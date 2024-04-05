function esVelocidadAceptable(longitudTramo, tiempoEmpleado) {
    const velocidad = longitudTramo / tiempoEmpleado;
    if (velocidad >= 40 && velocidad <= 60) {
        return "El conductor pasa la prueba";
    } else {
        return "El conductor es descalificado";
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor ingresa la longitud del tramo en kilómetros: ', (longitudTramo) => {
  rl.question('Por favor ingresa el tiempo empleado en horas: ', (tiempoEmpleado) => {
    longitudTramo = parseFloat(longitudTramo);
    tiempoEmpleado = parseFloat(tiempoEmpleado);
    console.log(esVelocidadAceptable(longitudTramo, tiempoEmpleado));
    rl.close();
  });
});
