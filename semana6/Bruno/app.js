const inputTextUserName = document.querySelector("#username");
const inputButtonStart = document.querySelector("#start");
const div_game = document.querySelector("#game");

const container_modal = document.querySelector(".container_modal");
const lost_container = document.querySelector(".lost_container");
const container = document.querySelector("#container");

let user = null;

inputTextUserName.addEventListener("keyup", function () {
  inputButtonStart.disabled = this.value == "";
});

inputButtonStart.addEventListener("click", function () {
  this.parentElement.querySelector(
    "h2"
  ).innerText += `Hello ${inputTextUserName.value}, let's play`;
  this.parentElement.querySelector("h2").style.display = "block";

  user = new User(inputTextUserName.value);

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
  const attempt_score =
    position > 10
      ? 10 + Number(String(position).charAt(0)) - diff_time
      : 10 - diff_time;
  score += Math.max(attempt_score, -1);
}
function showModal() {
  if (failedattempts >= 10) {
    setStyles();

    if (user === null) return;
    //caso juanito
    const user_index = findIndexUser();

    if (user_index !== -1) {
      users[user_index].games.push(setObjectGame());
      updateUserLocalStorage(users);
      return;
    }
    user.games.push(setObjectGame());
    addUserToLocalStorage(user);
  }
}

function setStyles() {
  // activamos los estilos
  // disabled scroll
  // disabled scroll
  document.body.style.overflow = "hidden";
  container_modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  container_modal.style.position = "relative";
  container_modal.style.height = "100vh";
  container.style.position = "absolute";
  lost_container.style.display = "block";
  container.style.zIndex = -1;
  input_pi.disabled = true;
  h3_score_finish.querySelector("span").innerText = score.toFixed(2);
}

function findIndexUser() {
  return users.findIndex((user_find) => user_find.username === user.username);
}

function setObjectGame() {
  return {
    score,
    attempts,
    correctattempts,
    failedattempts,
    gameover_at: user.gameover(),
  };
}

btn_reiniciar.onclick = () => window.location.reload();

// buscador
const btnBuscar = document.querySelector("#btn-buscar");
const inputBuscar = document.querySelector("#input-buscar");

btnBuscar.onclick = function () {
  // queremos buscar en el array de users
  const username = inputBuscar.value;

  const filterUsers = users.filter((user) => user.username.includes(username));

  createTableHistoric(filterUsers);

  inputBuscar.value = "";
};
