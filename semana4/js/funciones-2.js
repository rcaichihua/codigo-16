const alumnos = [];

const imprimirAlumnos = () => {
//function imprimirAlumnos(){
  const inputNombre = document.querySelector("#input_name");
  const nombre = inputNombre.value;

  alumnos.push(nombre);

  inputNombre.value = "";

  const resultado = document.querySelector(".resultado");

  resultado.innerHTML = "";

  for (const iterator of alumnos) {
    resultado.innerHTML += "<p>" +iterator + "</p>";
  }
}

const calcularPromedio = () => {
//function imprimirAlumnos(){
  const nota1= document.querySelector("#input_num1").value;
  const nota2 = document.querySelector("#input_num2").value;
  const nota3 = document.querySelector("#input_num3").value;
  const nota4 = document.querySelector("#input_num4").value;

  const resultado = document.querySelector(".resultado2");
 
  if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4))
  {
    if (nota1>20){
      resultado.innerHTML = "<p>Nota 1 es mayor a 20, ingrese nuevamente</p>"
      return;
    }
    if (nota2>20){
      resultado.innerHTML = "<p>Nota 2 es mayor a 20, ingrese nuevamente</p>"
      return;
    }
    if (nota3>20){
      resultado.innerHTML = "<p>Nota 3 es mayor a 20, ingrese nuevamente</p>"
      return;
    }
    if (nota4>20){
      resultado.innerHTML = "<p>Nota 4 es mayor a 20, ingrese nuevamente</p>"
      return;
    }
    resultado.innerHTML = "<p>" + ((Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4)  + "</p>";
  }
  else{
     resultado.innerHTML = "<p>" +"Una nota no es un número." + "</p>";
  }
  
}