function determinarGrupo(nombre, sexo) {
    // Convertimos el nombre a mayúsculas para comparar fácilmente
    nombre = nombre.toUpperCase();

    if ((sexo === 'mujer' && nombre.charAt(0) < 'M') || 
        (sexo === 'hombre' && nombre.charAt(0) > 'N')) {
        return 'Grupo A';
    } else {
        return 'Grupo B';
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor ingresa tu nombre: ', (nombre) => {
  rl.question('Por favor ingresa tu sexo (mujer/hombre): ', (sexo) => {
    sexo = sexo.toLowerCase(); // Convertimos el sexo a minúsculas

    let grupo = determinarGrupo(nombre, sexo);
    console.log(`Perteneces al ${grupo}.`);

    rl.close();
  });
});
