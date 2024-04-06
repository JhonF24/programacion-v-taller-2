function calcularPrecioTotal(numeroArticulos, precioUnitario) {
    let precioTotal = numeroArticulos * precioUnitario;
    
    // Comprobar si aplica descuento
    if (numeroArticulos > 10 && precioUnitario > 40) {
        let descuento = precioTotal * 0.15;  // 15% de descuento
        precioTotal -= descuento;
    }
    
    return precioTotal;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor ingresa el número de artículos: ', (numeroArticulos) => {
  numeroArticulos = parseInt(numeroArticulos);

  rl.question('Por favor ingresa el precio unitario de cada artículo: ', (precioUnitario) => {
    precioUnitario = parseFloat(precioUnitario);

    let totalAPagar = calcularPrecioTotal(numeroArticulos, precioUnitario);
    console.log(`El total a pagar es: ${totalAPagar.toFixed(2)} dólares`);
    rl.close();
  });
});
