// Una funcion es un bloque de codigo que realiza una accion

// la sintaxis de una function se divide. en 3

// Los mas clasico y antiguo
function nombreDeLaFuncion() {
  // En este espacio podemos escribir codigo
  const alumnos = ["Pepe", "Juan", "Maria", "Luisa", "Lex", "Lucas", "Klark"];

  for (let alumno of alumnos) {
    console.log(alumno);
  }
}

// Nota para hacer que una funcion se ejecute debemos llamarla
// Esta accion que acabamos de hacer se llama ejecutar a la funcions
nombreDeLaFuncion();

// Ahora haremos una funcion que retorne una valor

// Teoricamente hay 2 clases de funciones
// Funciones impuras => Es una funcion que no retorna un valor
// Funciones puras.  => Es una funcion que retorna valor

// * Las funcion tienen la opcion de usar "return" que es una
// * parala reserva de JS la cual sirve para devolver un valor

function cuboDeUnNumero() {
  return Math.pow(10, 3);
}

// recurden que esta es llamar a una funcion
const resultado = cuboDeUnNumero();

console.log("resultado", resultado);

// Una funcionalidad es el poder enviar valores a las funciones
// Lo que esta dentro del parentesis en una funcion se llaman parametros
// y podemos enviar n parametros
//* Los parametros deben estar separados por comas
function potenciaDeUnNumero(numero, potencia) {
  return Math.pow(numero, potencia);
}

const ejemplo1 = potenciaDeUnNumero(4, 3); // 4 al cubo
const ejemplo2 = potenciaDeUnNumero(6, 2); // 6 al cuadrado
console.log(ejemplo1);
console.log(ejemplo2);

let numero1 = Number(document.getElementById("numero1").value);
let numero2 = Number(document.getElementById("numero2").value);

function Suma(n, m) {
  if (isNaN(n) || isNaN(m)) {
    return "No se puede sumar";
  }
  return n + m
}

document.writeln(Suma(numero1, numero2));

function calcularFactorial(numero) {
  const number = Number(numero);

  if (isNaN(number)) {
    return "No se puede imprimir, no es un numero";
  }
  let resultado = 1;
  for (let index = 1; index <= numero; index++) {
    resultado *= index;
  }
  return resultado;
}

function imprimirFactorial() {
  const inputValue = document.getElementById("input_number").value;
  const resultado = calcularFactorial(inputValue)

  const container = document.querySelector(".container");
  if (isNaN(resultado)) {
    container.innerHTML += "<br> <p>" + resultado + "</p>";
  }
  else {
    container.innerHTML += "<br> <p>Factorial de " + inputValue + " = " + resultado + "</p>";
  }
}

function multiplicarPorN() {
  const container = document.querySelector(".container");
  const inputValue = document.getElementById("input_number").value;
  container.removeAttribute = "";
  for (let index = 1; index < 11; index++) {

    container.innerHTML +=
      "<p>" + index + " x " + inputValue + " = " + index * inputValue + "</p>";
  }
  container.innerHTML += (!isNaN(6) || !isNaN(3)) ? "No" : 9 * 9;
}