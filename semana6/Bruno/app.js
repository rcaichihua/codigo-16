const inputTextUserName = document.querySelector("#username");
const inputButtonStart = document.querySelector("#start");
const div_game = document.querySelector("#game");
const container_modal = document.querySelector(".container_modal");
const lost_container = document.querySelector(".lost_container");
const container = document.querySelector("#container");
//const nameUser = document.querySelector(".name");

// inputTextUserName.onkeyup = function () {
//   this.value !== ""
//     ? (inputButtonStart.disabled = false)
//     : (inputButtonStart.disabled = true);
// };

// inputButtonStart.onclick = function () {
//   nameUser.style.display = "block";
//   nameUser.innerHTML = "Hola usuario, " + inputTextUserName.value;
// };

inputTextUserName.addEventListener("keyup", function () {
  inputButtonStart.disabled = this.value == "";
  // this.value !== ""
  //   ? (inputButtonStart.disabled = false)
  //   : (inputButtonStart.disabled = true);
});

console.log("username", localStorage.getItem("user_name"));
//para convertir de string a objeto usamos
console.log("objeto user", JSON.parse(localStorage.getItem("obj_user")));

inputButtonStart.addEventListener("click", function () {
  this.parentElement.querySelector(
    "h2"
  ).innerText += `Hello ${inputTextUserName.value}, let's play`;
  this.parentElement.querySelector("h2").style.display = "block";
  //*localStorage.setItem = es la funcion que permite guardar un string en localstorage
  //*este recibe 2 parametros
  //*1 =>key
  //*2=>value
  localStorage.setItem("user_name", inputTextUserName.value);
  //paran guardar pobjetos mas complejos
  const objetoUser = {
    user_name: inputTextUserName.value,
    created_at: new Date(),
  };

  localStorage.setItem("obj_user", JSON.stringify(objetoUser));

  inputTextUserName.disabled = true;
  this.disabled = true;

  div_game.style.display = "flex";
});
const pi_decimal =
  "14159265358979323846264338327950288419716939937510582097494459230781640628620";
let position = 0;
let points = 0;
let attempts = 0;
let correctattempts = 0;
let failedattempts = 0;
let last_attempt = null;
let score = 0;

const input_pi = document.querySelector("#user_pi");
const result_pi = document.querySelector("#result_pi");

const h3_attempts = document.querySelector("#h3_attempts");
const h3_sattempts = document.querySelector("#h3_correctattempts");
const h3_fattempts = document.querySelector("#h3_failedattempts");
const h3_score = document.querySelector("#h3_score");
const h3_score_finish = document.querySelector("#h3_score_finish");
const btn_reiniciar = document.querySelector("#btn-reiniciar");

// ["keydown", "keypress", "keyup"].forEach((event) =>
//   input_pi.addEventListener(event, verificaPi)
// );
// let last_attempt = null;
// function verificaPi(e) {
//   //Momento en que se ponga el numero
//   let now_attempt;
//   if (e.type == "keyup") {
//     now_attempt = Date.now();
//   }
//   //const decimal = this.value;
//   const decimal = String.fromCharCode(e.keyCode);
//   this.value = "";
//   //Contabiliza la cantidad de veces que pasa
//   if (e.type == "keyup") attempts++;
//   if (
//     decimal == "" ||
//     isNaN(decimal) ||
//     decimal != pi_decimal.charAt(position)
//   ) {
//     if (e.type == "keypress") {
//       result_pi.style.color = "red";
//       failedattempts++;
//     }
//   } else {
//     if (position > 0) {
//       const diff_time = now_attempt - last_attempt;
//       console.log(diff_time);
//     }
//     result_pi.style.color = "green";
//     result_pi.innerText += decimal;
//     position++;
//     correctattempts++;
//   }
//   last_attempt = now_attempt;

//   setTimeout(function () {
//     result_pi.style.color = "black";
//   }, 500);
//   this.focus();

//   // SCORE:
//   h3_attempts.querySelector("span").innerText = attempts;
//   h3_sattempts.querySelector("span").innerText = correctattempts;
//   h3_fattempts.querySelector("span").innerText = failedattempts;
//   //h3_score.querySelector("span").innerText = score;
// }
input_pi.addEventListener("keyup", function () {
  this.value = "";
  this.focus();
});

input_pi.addEventListener("keydown", function (evt) {
  const decimal = String.fromCharCode(evt.keyCode); // this.value;

  let now_attempt = Date.now();

  attempts++;

  if (
    decimal == "" ||
    isNaN(decimal) ||
    decimal != pi_decimal.charAt(position)
  ) {
    result_pi.style.color = "red";
    failedattempts++;
    showModal(failedattempts);
  } else {
    if (position > 0) {
      calcScore(now_attempt);
    }
    result_pi.style.color = "green";
    result_pi.innerText += decimal;
    position++;
    correctattempts++;
  }

  last_attempt = now_attempt;

  setTimeout(function () {
    result_pi.style.color = "black";
  }, 250);

  // SCORE:
  h3_attempts.querySelector("span").innerText = attempts;
  h3_sattempts.querySelector("span").innerText = correctattempts;
  h3_fattempts.querySelector("span").innerText = failedattempts;
  h3_score.querySelector("span").innerText = score.toFixed(2);
});
function calcScore(now_attempt) {
  const diff_time = (now_attempt - last_attempt) * 0.01;

  // if (position > 10) {
  //   const digito = String(position).charAt(0);
  //   score += 10 + Number(digito) - diff_time * 0.01;
  // } else {
  //   score += 10 - diff_time * 0.01;
  // }
  const attempt_score =
    position > 10
      ? 10 + Number(String(position).charAt(0)) - diff_time
      : 10 - diff_time;
  score += Math.max(attempt_score, -1);
  //10 perimeros aciertos seran
  //score = 10 - (dieff_time*0.01)
  //score between 11 and 19
  //score = 10 + 1 - (diff_time*0.01)
  //score between 20 and 29
  //score = 10 + 2 - (diff_time*0.01)
  //score between 30 and 39
  //score = 10 + 3 - (diff_time*0.01)
  //console.log(score);
}
/*Ejemplo MULTIPLES eventos */
// ["keyup", "keypress", "keydown", "click"].forEach((event) =>
//   inputTextUserName.addEventListener(event, muestraUsuarioH1)
// );

// function muestraUsuarioH1(e) {
//   const nameUser = document.querySelector(".name");
//   console.log(e.type);
//   nameUser.style.display = "block";
//   nameUser.innerHTML = "Hola usuario, " + inputTextUserName.value;
// }

function showModal(failedattempts) {
  console.log(failedattempts);
  if (failedattempts === 10) {
    container_modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    lost_container.style.display = "block";
    container.style.zIndex = -1;
    input_pi.disabled = true;
    h3_score_finish.querySelector("span").innerText = score.toFixed(2);
  }
}

btn_reiniciar.onclick = () => window.location.reload();
