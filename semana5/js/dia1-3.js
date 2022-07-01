for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i of ["aaa", "bbb"]) {
}

for (let i in ["aaa", "bbb"]) {
}
/*Lo que sigue del for es el foreach
este foreach es usadpo para poder iterar elementos sin retornar nada
en foreach no existe el return
*/
const alumnos = ["pepe", "juan", "luis", "maria", "carla", "ale"];
//foreach es una funcion de los array
//1: el value => es el valor que extraemos en cada iteracion
//2: el index => es la posicion del elemento
alumnos.forEach((value, index) => {
  console.log("Index =>", index);
  console.log("Value =>", value);
});
//!Esta forma de recorrer un arreglo es moderna
//!Tener en cuenta que el return no es posible en el foreach
const carros = [
  {
    modelo: "Nissan GTR",
    price: 10000,
  },
  {
    modelo: "Toyota GTR",
    price: 90000,
  },
  {
    modelo: "Chino GTR",
    price: 70000,
  },
];

carros.forEach((carro, index) => {
  console.log(index);
  console.log(carro);
});
