const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor ingresa el medio de transporte (coche, tren, bicicleta o autobús): ', (medioTransporte) => {
  switch (medioTransporte.toLowerCase()) {
    case 'coche':
      console.log('¡Buen viaje en coche!');
      break;
    case 'tren':
      console.log('¡Buen viaje en tren! "lleva dinero para el ticket".');
      break;
    case 'bicicleta':
      console.log('¡Buen viaje en bicicleta!');
      break;
    case 'autobús':
      console.log('¡Buen viaje en autobús! "lleva dinero para el ticket".');
      break;
    default:
      console.log('Medio de transporte no reconocido.');
      break;
  }
  rl.close();
});
