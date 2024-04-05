const dataFromConsole = process.argv;

let num = prompt("Ingrese un Numero");

num = parseInt(num);

if (num % 2 === 0) {
    console.log(num + " Es un Numero Par");
} else {
    console.log( num + " Es un Numero impar");
};