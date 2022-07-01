//Fechas
//Cambio por zona horaria
//Recordemos que cambiar la hora pero el minitu y segudno se mantiene
//esto es manejable
//actualmente js tiene funciones que en base a la zona horaria
//van a setear la hora

//como podemos capturar la hora de nuestro navegador
//para poder obtener la hora en javascript se usa new Date()
//Instanciar
const fecha = new Date();
console.log(fecha);

const dia = fecha.getDay();
console.log("Dia: ", dia);
const mes = fecha.getMonth() + 1; //Enero empieza en 0 en JS
console.log("Mes: ", mes);
//esta hora es la hora del cliente de la computadora del cliente.
const year = fecha.getFullYear();
console.log("Año: ", year);
//JS => la primera fecha en tiene JS es 1970
//Nos retorna en milisegundos
const hour = fecha.getTime(); //Enero empieza en 0 en JS
console.log("hora: ", hour);

const hour2 = fecha.getHours(); //Enero empieza en 0 en JS
console.log("hora 2: ", hour2);

const minuts = fecha.getMinutes(); //Enero empieza en 0 en JS
console.log("Minutos: ", minuts);

const seconds = fecha.getSeconds(); //Enero empieza en 0 en JS
console.log("Segundos: ", seconds);

const miliseconds = fecha.getMilliseconds(); //Enero empieza en 0 en JS
console.log("Mili Segundos: ", miliseconds);

const timeZone = fecha.getTimezoneOffset(); //Enero empieza en 0 en JS
console.log("Zone: ", timeZone);

//UTC => es la hora global
const diaGlobal = fecha.getUTCDate();
console.log("Dia Global", diaGlobal);

console.log("Type: ", typeof fecha);
const fechaString = String(fecha);
console.log("Type: ", typeof fechaString);
console.log("Fecha: ", fechaString);
//Transformar a array el string en un arreflo
const frase = "Hola me llamo Roger";
const frase2 = "Hola, me, llamo, Roger";
//split se especifica el espaciado o tipo de separacion
console.log(frase.split(" "));
console.log(frase2.split(","));

console.log("Fecha en String: ", fechaString.split(" ")[9].replace(")", ""));
