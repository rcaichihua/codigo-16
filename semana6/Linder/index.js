const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const inputPasswordConfirm = document.querySelector("#input-password-confirm");
const checkShowPassword = document.querySelector("#chekbox-show");
const inputPhoneNumber = document.querySelector("#input-phone-number");
const textError = document.querySelector(".text-error");
const textErrorEmail = document.querySelector(".text-error-email");

checkShowPassword.onchange = function () {
  this.checked
    ? (inputPassword.type = "text")
    : (inputPassword.type = "password");
};
//Cuando hablamos de eventos del teclado
//* onkeydown => Evento cuando se presiona la tecla
//* onkeypress => Evento que se ejecuta mientras se presiona la tecla
//*onkeyup => evento que se ejecuta cuanod se levanta la tecla

inputPasswordConfirm.onkeyup = function () {
  const password = inputPassword.value;
  const confirmPassword = this.value;

  if (password === "") {
    alert("Debe completar el password para poder escribir en este Input.");
    this.value = "";
    inputPassword.focus();
    return;
  }
  if (password !== confirmPassword) {
    console.log("Contraseña no coincide.");
    textError.style.display = "block";
  } else {
    textError.style.display = "none";
    console.log("Si son iguales");
  }
};

inputPhoneNumber.onkeyup = function () {
  // const valor = this.value;
  // //? Podemos convertir el texto a un array y evaluar si alguno de ellos es un string
  // //? si es asi eliminar del array y luego convertir ese array a un string sea
  // //? el value del input
  // const caracteres = valor.split("");

  // let newValue = "";
  // // isNaN: is not a number
  // caracteres.forEach((caracter) => {
  //   // Si es un numero entonces agregalo a newValue
  //   if (!isNaN(Number(caracter))) {
  //     newValue += caracter;
  //   }
  // });

  // // Luego de iterar el array y verificar que solo agregue los numeros
  // // a la variable newValue decimos que el valor del input sera newValue
  // this.value = newValue;

  inputPhoneNumber.onkeyup = function () {
    this.value = this.value
      .split("")
      .filter((caracter) => !isNaN(Number(caracter)))
      .join("");
  };
};

inputEmail.onkeyup = function () {
  const regex = new RegExp(
    /^[-!#-'*+\/-9=?^-~]+(?:\.[-!#-'*+\/-9=?^-~]+)*@[-!#-'*+\/-9=?^-~]+(?:\.[-!#-'*+\/-9=?^-~]+)+$/i
  );

  // regex.test(this.value)
  //   ? (textErrorEmail.style.display = "none")
  //   : (textErrorEmail.style.display = "block");

  regex.test(this.value)
    ? (inputEmail.style.borderColor = "green")
    : (inputEmail.style.borderColor = "red");
};
