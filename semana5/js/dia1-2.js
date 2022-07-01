//Eventos
//Es una accion que el usuario o el navegador pueden activar
//onClick => Se activa cuanod el usuario usa el mouse y da click
//para activar los eventos hacer desde JS o desde el Html

//onChange
//onKeyup
//onKeydown
//onsubmit
//onmousehover
const btnTest = document.querySelector("#btn-test");
const h1Test = document.querySelector("#h1-test");

btnTest.onclick = () => {
  console.log("Es un click a button");
};

h1Test.onclick = () => {
  console.log("Es un click a h1");
  h1Test.innerText = "Cambiando el texto de H1";
};
// btnTest.onclick = function () {
//   console.log("Es un click");
// };
//NODELIST
//NODEELEMENT
const users = [];

const form = document.querySelector("#form-store-user");

//!El evento onsubmiy tiene una propiedad especial la cual nos
//!da un parametro que esta implicito este parametro contiene la
//!informacion del evento y se suele event o e
form.onsubmit = (event) => {
  //Nota : un formulario al tener el evento submit y va a recargar la pagina
  //?para evotar que se recargue la pagina se puede usar el
  //?evento.preventdefault() esta funcion bloquea esa accion de recargar la pagina.
  event.preventDefault();
  console.log(event.target);

  //!Nota ka informacion de los inpits siempre estara en el target.

  const user = {};

  //*Existe la clase FormData
  const formData = new FormData(event.target);
  for (let [key, value] of formData.entries()) {
    //['name','Roger']
    //['Lastname','Caichihua']
    //console.log(key,value);
    user[key] = value;
  }
  console.log(user);
};
