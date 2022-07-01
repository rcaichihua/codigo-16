let num1 = 17;
let num2 = 3;

console.log(num1 + num2);

console.log(num1 / num2);

console.log(num1 % num2);

console.log(num1 * num2);

let num3 = "20";

console.log(Number(num3));

let num4 = "33.25";
console.log(`Forma1: ${parseInt(num4)}`);
console.log(`Forma2: ${Number(num4)}`);
console.log(`Forma3: ${num4}`);
console.log(`Forma4: ${parseFloat(num4)}`);
console.log(`Forma4: ${Number("12hola")}`);

// const cateto_a = prompt("Ingrese lado A");
const cateto_b = Number(prompt("Ingrese lado B"));
const cateto_c = Number(prompt("Ingrese lado C"));

let resultado = Math.sqrt(Math.pow(cateto_b,2) + Math.pow(cateto_c,2));

// console.log(resultado);
/** Reto */
/**1.- hacer un algoritmo que halle el area de un rectangulo */
const base = Number(prompt("Ingrese base"));
const altura = Number(prompt("Ingrese altura"));

let rspta = base * altura;
console.log(`El Area es ${rspta}`);

/**Area de un circulo */
const radio = Number(prompt("Ingrese el radio"));

let rspta2 = Math.PI * Math.pow(radio, 2);

console.log(`El Area del circulo es ${rspta2}`);

