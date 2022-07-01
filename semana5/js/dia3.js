//Every y some
//Son funciones que nos permiten iterar sobre una coleccion de elementos
//ahora estas 2 funciones no retornan array lo que retorna every y some
//son booleans
//!Every &&
//!Some ||

//!true o false
//Nos sirve para poder validar una condicion y que aplique
//aplique a cada uno de los elementos iterados
//Nos sirve para poder validar una condicion y que aplique
//a cada uno de los elementos iterados
//ejemplo every
const edades = [10, 20, 30, 40];
//Esto va a analizar todo el array y tiene que
//verificar que cada elemento cumpla la condicion
const analizandoEdades = edades.every((edad) => edad > 20);
//!NOta importante para que every retorne true cada elemento debe sumplir la condicion
console.log(analizandoEdades);

const analizandoEdades2 = edades.every((edad) => edad !== "");
console.log(analizandoEdades2);

const alumnos = [
  {
    name: "Pepe",
    age: 21,
  },
  {
    name: "Luis",
    age: 18,
  },
  {
    name: "Maria",
    age: 19,
  },
];
//Queremos saber si los alumnos son mayores de edad
console.log(
  "Es mayor",
  alumnos.every((alumno) => alumno.age >= 18)
);

//some
//Pero el evalua los elementos y si alguno de ellos cumple
//la condicion es true
const precios = [121, 314, 121, 873];
//vamos a evaluar si alguno de ellos es par
console.log(
  "precios",
  precios.some((precio) => precio % 2 === 0)
);
//!Nota recuerden que si ni un elemento cumple la condicion
//!some retorna false.
