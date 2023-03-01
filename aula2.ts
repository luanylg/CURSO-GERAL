const entrada = require("readline-sync");

let n1: number = parseFloat (entrada.question ("Digite um numero: "));
let n2: number = parseFloat (entrada.question ("Outro numero: "));
let soma: number = n1*n2
console.log(n1 * n2);
console.log(typeof(n1));
console.log(typeof(n2));
console.log(typeof(soma));