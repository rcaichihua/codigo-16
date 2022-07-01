const nombres = ["Pepe", "Juan", "Maria", "Luisa", "Carlos", "Lucas", "Linder"];

console.log(nombres);
console.log(nombres[3]);
console.log(nombres[6]);
// ! Nota si queremos mostrar un dato en una posicon que no existe
// js retorna un undefined
// length => Esta funcion retonarna la cantidad de elementos
console.log("Nombres", nombres.length); // 6 o 7?

const datos = [1, true, false, -2, "Hola mundo"];

console.log("datos", datos.length);

// Pregunta si quieres acceder al ultimo elemento usando length
console.log("datos", datos[datos.length - 1]);

// Push: Sirve para poder agregar un elemento al array
// lo agrega en la ultima posicion
datos.push("Agregando un dato");
console.log("datos con push", datos);
console.log("Agregando un array dentro de un array");
datos.push(["Pepe", "Juan", "Maria"]);
console.log(datos);

const datosPrueba = [
  1,
  true,
  false,
  -2,
  "Hola mundo",
  "Agregando un dato",
  ["Pepe", "Juan", [1, 2, 4, 5, [-1, -2, -4]], "Maria"],
];

console.log(datosPrueba[3]);
console.log(datosPrueba[6][0]);
console.log(datosPrueba[6][2][3]);
console.log(datosPrueba[6][2][4][2]);

console.log(datosPrueba[6][2].length); // 5

console.log(datosPrueba[6][datosPrueba[6].length - 3]);
console.log(
  datosPrueba[6][datosPrueba[6].length - 2][datosPrueba[6][2].length - 1]
);
// Pop es una funciona para poder eleminar el ultimo elemento de un array
const laptops = ["hp", "macbook", "asus", "lenovo"];
console.log("Laptops: ", laptops);
// Retorna el elemento eliminado
console.log("Elemento eliminado", laptops.pop());
console.log("Laptops: ", laptops);

// Supongamos que tengamos una lista de alumnos
const alumnos = ["Luis", "Juan", "Maria", "Luciana", "Lucas"];
const alumnoEliminado = alumnos.pop();
console.log("El alumno " + alumnoEliminado + " fue eliminado");
console.log("Alumnos", alumnos);

// unshift: Esta funcion agrega un elemento a un array pero en la
// primera posicion
alumnos.unshift("Daniel");
console.log("Unshift", alumnos);
//ojo hemos agregado a Daniel
// shift: Esta funcion elminar al primer elemento de un array
console.log("Shift", alumnos.shift());
// indexOf : Esta funcion retorna la posicion en base a un datos
const colores = ["Rojo", "Verde", "Amarillo", "Azul", "Verde", "Morado"];
//Nota si tenemos elementos repetidos va a encontrar al mas cercanos
// en este casi es el 1
//! Es caseSensitive
// Sinsible a mayusculas cuando nos referimos a eso quiere decir que el
// text que se busca debe ser indetico tanto en mayusculo como en  minusculas

//! Si ustedes ponen un valor que no existe este retorna -1
//!* Podemos usar esto para ver si un elemento existe en un array
console.log(colores.indexOf("Verde"));

const busqueda = prompt("Ingrese el color");

if (colores.indexOf(busqueda) !== -1) {
  alert("El color si existe y es " + colores[colores.indexOf(busqueda)]);
} else {
  alert("El color no existe");
}