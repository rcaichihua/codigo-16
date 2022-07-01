// container:
const div_container = document.getElementById('container');

// Objetos
class Carro {

    constructor(_color, _velocidad) {
        this.color = _color;
        this.velocidad = _velocidad;
    }

    presentacion() {
        const texto = "Hola soy un carro de color " + this.color
        + " y tengo una velocidad de: " + this.velocidad + "kmh";
        return texto;
    }
    /**
   * @param {string} _color
   */
    setColor(_color){
      this.color = _color.toString().toLowerCase();
    }
    setVelocidad(_velocidad){
      this.velocidad = _velocidad;
    }
    getColor(){
      return this.color;
    }
}

const carro_rojo = new Carro('ROJO', 200); // instanciar objeto
const carro_azul = new Carro('AZUL', 50); // dar vida al objeto
const carro_verde = new Carro('VERDE', 100); // crear el objeto
carro_rojo.setColor('NEGRO');
carro_rojo.setVelocidad(1000);
div_container.innerHTML += "<p>" + carro_rojo.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_azul.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_verde.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_verde.getColor() + "</p>";
div_container.innerHTML += "<hr>";

// let cantidad = Number(
//       prompt("Ingrese la cantidad de Carros")
//     );
// let color = prompt("Ingrese el color");
let cantidad = 1;
let color = 'NEGRO';

div_container.innerHTML += "<h2>Son "+cantidad+" carros de color "+ color+" que se muestran.";
div_container.innerHTML += "<hr>";
function crearCarros(cantidad, color){
    for (let index = 1; index <= cantidad; index++) {  
    const carro = new Carro(color,(index + 5));
    div_container.innerHTML += "<p>" + carro.presentacion() + "</p>";
    div_container.innerHTML += "<hr>";
  }
}

crearCarros(cantidad,color);

class Cuadrado {
  constructor(_lado){
    this.lado=_lado;
  }
  area(){
    return (this.lado * this.lado) + "m2";
  }
  get lados(){
    return this.lado;
  }
  set area(_area){
    this.lado = Math.sqrt(_area);
  }
}

const c1 = new Cuadrado(4);

c1.lado=10
div_container.innerHTML += "<p>" + c1.lados+ "</p>";

class user{
  static cantidad = 0;

  constructor(_id,_firstName,_LastName){
    this.id = _id;
    this.firstName = _firstName;
    this.lastName = _LastName;
    user.cantidad++;
  }
  get fullName(){
    return this.firstName + " " + this.lastName;
  }

  set fullName(_fullName){
    this.firstName = _fullName.split(" ")[0];
    this.lastName = _fullName.split(" ")[1];
  }
  static getCantidad(){
    return user.cantidad;
  }
}
const u1 = new user(1,"Roger","Caichihua");
div_container.innerHTML += "<p>" +"Hola" + "</p>";
