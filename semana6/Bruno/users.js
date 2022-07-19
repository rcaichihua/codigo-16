class User {
  constructor(_username) {
    this.username = _username;
    this.games = [];
  }
  gameover() {
    return new Date();
  }
}
//Arreglo de usuario
let users = [];

if (localStorage.getItem("pitrainer.users") != null) {
  users = JSON.parse(localStorage.getItem("pitrainer.users"));
}

function addUserToLocalStorage(user) {
  users.push(user);
  localStorage.setItem("pitrainer.users", JSON.stringify(users));
}

function updateUserLocalStorage(users) {
  localStorage.removeItem("pitrainer.users");
  localStorage.setItem("pitrainer.users", JSON.stringify(users));
}

const button_restart = document.querySelector("#restart");

if (users.length !== 0) {
  div_history = document.querySelector("#history");
  div_history.style.display = "block";
  createTableHistoric();
  button_restart.disabled = false;
}

button_restart.addEventListener("click", function () {
  localStorage.removeItem("pitrainer.users");
  window.location.reload();
});

function createTableHistoric(arrayUsers = users) {
  const container_history = document.querySelector("#history_container");

  container_history.innerHTML = "";

  arrayUsers.forEach((user) => {
    // crear los nombres
    const h4 = document.createElement("h4");
    h4.innerText = user.username;

    container_history.append(h4);
    // crear la table
    const table = document.createElement("table"); // <table></table>
    const thead = document.createElement("thead"); // <thead></thead>

    thead.innerHTML = `
		<tr>
			<th>Score</th>
			<th>Attempts</th>
			<th>✅ </th>
			<th>❌ </th>
			<th>Game Over</th>
		</tr>	
		`;

    const tbody = document.createElement("tbody");
    // entonces debemos iterar lo que es user.games
    user.games.forEach((game) => {
      tbody.innerHTML += `
				<tr>
					<td>${game.score.toFixed(2)}</td>
					<td>${game.attempts}</td>
					<td>${game.correctattempts}</td>
					<td>${game.failedattempts}</td>
					<td>${new Date(game.gameover_at).toLocaleString("es-PE", {
            weekday: "short",
            year: "2-digit",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}</td>
				</tr>
			`;
    });
    table.append(thead);
    table.append(tbody);
    container_history.append(table);
  });
}
