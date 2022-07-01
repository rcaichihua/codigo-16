const users=[
  {
  name: "Linder",
  lastName: "Hassinger",
  phoneNumber: "999999999",
  address: "Calle falsa 123",
  isDeveloper: true,
  age: 22
  },
  {
  name: "Roger",
  lastName: "Caichihua",
  phoneNumber: "999999999",
  address: "Calle siempre viva 123",
  isDeveloper: true,
  age: 39
  },
];

for (const user in users) {
  console.log(users[user].name);
}
console.log("=========>=====>")
for (const user of users) {
  console.log(user.name);
}

//DOM 
//Document Object Model -> Estructua de arbol - Contenedor

const h1 = document.querySelector("h1");
//innerHtml = Se usa para escribir etiquetas
//innerText = Para escribir dentro de las etiquetas
h1.innerText = "Cambiando el H1";
console.log(h1);
document.title = "Hola que hace?";
//tagname = El nombre de la etiqueta
//Ejm <h1></h1> = h1
//<div></div> = div
//tambien se puede modificar el css
//lña forma en la que podemos cambiar los estulos de nuestra pagina
//es usando style.
document.body.style.backgroundColor = "#c3c3c3";
document.body.style.fontFamily = "Helvetica";

h1.style.color = "blue";

//CUalquiwer cosa en JS es un objeto