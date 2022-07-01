//foreach
//Recuerden que el retur no existe en el foreach
//La alternativa que tendremos al foreach se llama map

const products = [
  {
    name: "Laptop HP",
    price: 1300,
    brand: "HP",
  },
  {
    name: "Laptop ASUS",
    price: 2600,
    brand: "Asus",
  },
  {
    name: "Laptop LG",
    price: 1000,
    brand: "Lenovo",
  },
  {
    name: "Laptop Gamer",
    price: 800,
    brand: "Dell",
  },
];
const productForEachIter = products.forEach((product) => {
  //Recuerden que product es cada elemneto de mi array
  console.log(product.name);
});
//queremos agregaer un nuevo campo al array de objetos
//En este caso estamos calculando el campo descount y lo estamos guardando en
//productMapIter
//Los valores que esta capturando nuestro map los esta gusrdando en
//la variable productMapIter y esto sera un resuktado de los resultados.
const productMapIter = products.map((product) => {
  return product.price - 50;
  //console.log(product.name);
});
// el map devuelve un array de elementos.
console.log("forEach", productForEachIter);
console.log("map", productMapIter);

const edades = [1, 2, 3, 4, 5];

const edadesAlCuadrado1 = edades.map((edad) => {
  return Math.pow(edad, 2);
});
//Arrow function se usa cuando solo hay una sola linea codigo a ejectar.
const edadesAlCuadrado2 = edades.map((edad) => Math.pow(edad, 2));

console.log(edadesAlCuadrado1);
console.log(edadesAlCuadrado2);

const edadadesAlCuadroForEach = [];
const edadadesAlCuadroForEach2 = [];

edades.forEach((edad) => {
  edadadesAlCuadroForEach.push(Math.pow(edad, 2));
});
//inline
edades.forEach((edad) => edadadesAlCuadroForEach2.push(Math.pow(edad, 2)));

console.log("edadadesAlCuadroForEach", edadadesAlCuadroForEach);
console.log(edadadesAlCuadroForEach2);

//
const clothes = [
  {
    brand: "Mango",
    type: "Shirt",
    price: 300,
    store: "Falabella",
    rating: 4.3,
    features: {
      color: "green",
      size: "small",
    },
  },
  {
    brand: "Zara",
    type: "Pants",
    price: 200,
    store: "Ripley",
    rating: 3.9,
    features: {
      color: "black",
      size: "Large",
    },
  },
  {
    brand: "Tommy",
    type: "T-Shirt",
    price: 120,
    store: "Tommy",
    rating: 4.3,
    features: {
      color: "blue",
      size: "Medium",
    },
  },
];
//filter es el hermano de map
//filter tambien retorna un array de elemetos
//sin embargo filter sirve para poder crear filtros en base a una condicion
// aqui se pone un filtro ropa mayor a 200
const filtro = clothes.filter((clothe) => clothe.price > 200);
console.log(filtro);

//filtro2
const filtro2 = clothes.filter(
  (clothe) => clothe.price > 150 && clothe.rating > 4
);
console.log("filtro 2", filtro2);
//filtro3 con map
const filtro3 = clothes.map((clothe) => {
  if (clothe.price > 150 && clothe.rating > 4) return clothe;
});
console.log("filtro 3", filtro3);
//filtro4 con map tipo like y convertir todo a miniscula para poder buscar el contenido.
const filtro4 = clothes.filter((clothe) =>
  clothe.type.toLocaleLowerCase().includes("shirt")
);
console.log("filtro 4", filtro4);

const frase = "HolameLlamoCarlos";
console.log(frase.toLowerCase().includes("llamo"));
//filer devukeve un conjunto de datos un array
const numbers = [22, 56, 12, 67, 17];
const resu1 = numbers.filter((number) => number > 30);

console.log(resu1);
//Find solo devuelve un valor
const resu2 = numbers.find((number) => number > 30);
console.log(resu2);

//ejmeplo2
const cars = [
  {
    model: "GLA 200",
    price: 34000,
    brand: "Mercedez",
  },
  {
    model: "A 200",
    price: 14000,
    brand: "Mercedez",
  },
  {
    model: "X6",
    price: 34000,
    brand: "BMW",
  },
];

const filtro5 = cars.find((car) => car.brand === "Mercedez");
console.log("Filtro Mercedez", filtro5);

//El Find tiene un hermanito FindIndex
//Es igual que el Find pero retorna el indice
const filtro6 = cars.findIndex((car) => car.brand === "Mercedez");
const filtro7 = cars.findIndex((car) => car.brand === "BMW");
console.log(filtro6);
console.log(filtro7);
