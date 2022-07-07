//DOM
const listTask = document.querySelector("#list");
const inputTask = document.querySelector("#input_wewtask");

const arrayTasks = [];

function addTask() {
  if (inputTask.value === "") {
    alert("Ingrese un texto para la tarea");
    inputTask.focus();
    return;
  }
  const task = new Task(inputTask.value);
  arrayTasks.push(task);
  //document.getElementsByClassName("form")[0].before(task.createElement());
  document.querySelector(".form").before(task.createElement());
  inputTask.value = "";
  inputTask.focus();
}

function checkTask(checkbox) {
  if (checkbox.checked) {
    parentTask(checkbox).done();
    checkbox.setAttribute("disabled", true);
  }
}

function deleteTask(anchor) {
  // const task_id = anchor.parentElement.id;
  // const task = arrayTasks.find((task) => task.id == task_id);
  parentTask(anchor).delete();
}

function updateTask(anchor) {
  const newText = prompt("Ingrese el nuevo nombre de su tarea.");
  parentTask(anchor).update(newText);
}

function parentTask(element) {
  return arrayTasks.find(
    (task) => task.id == element.parentElement.parentElement.id
  );
}

const chxTaskDone = document.querySelector("#chx_task_done");
const chxTaskDelete = document.querySelector("#chx_task_delete");
const chxTaskTodo = document.querySelector("#chx_task_todo");

chxTaskDone.onchange = function () {
  showOrHideElement(this.checked, ".todo", ".delete");
  //retorna una lista de elementos
  // const taskTodo = document.querySelectorAll(".todo");
  // const taskDelete = document.querySelectorAll(".delete");
  // if (this.checked) {
  //   //recuerden que taskTodo es una lista de elementos HTML
  //   taskTodo.forEach((todo) => (todo.style.display = "none"));
  //   taskDelete.forEach((task) => (task.style.display = "none"));
  // } else {
  //   taskTodo.forEach((todo) => (todo.style.display = "block"));
  //   taskDelete.forEach((task) => (task.style.display = "block"));
  // }
};
chxTaskDelete.onchange = function () {
  showOrHideElement(this.checked, ".todo", ".done");
  //retorna una lista de elementos
  // const taskTodo = document.querySelectorAll(".todo");
  // const taskDone = document.querySelectorAll(".done");
  // if (this.checked) {
  //   //recuerden que taskTodo es una lista de elementos HTML
  //   taskTodo.forEach((todo) => (todo.style.display = "none"));
  //   taskDone.forEach((task) => (task.style.display = "none"));
  // } else {
  //   taskTodo.forEach((todo) => (todo.style.display = "block"));
  //   taskDone.forEach((task) => (task.style.display = "block"));
  // }
};
chxTaskTodo.onchange = function () {
  showOrHideElement(this.checked, ".delete", ".done");
  //retorna una lista de elementos
  // const taskDelete = document.querySelectorAll(".delete");
  // const taskDone = document.querySelectorAll(".done");
  // if (this.checked) {
  //   //recuerden que taskTodo es una lista de elementos HTML
  //   taskDone.forEach((done) => (done.style.display = "none"));
  //   taskDelete.forEach((task) => (task.style.display = "none"));
  // } else {
  //   taskDone.forEach((done) => (done.style.display = "block"));
  //   taskDelete.forEach((task) => (task.style.display = "block"));
  // }
};

function showOrHideElement(checked, typeOne, TypeTwo) {
  const elementsOne = document.querySelectorAll(typeOne);
  const elementsTwo = document.querySelectorAll(TypeTwo);

  if (checked) {
    //recuerden que taskTodo es una lista de elementos HTML
    elementsOne.forEach((todo) => (todo.style.display = "none"));
    elementsTwo.forEach((task) => (task.style.display = "none"));
  } else {
    elementsOne.forEach((todo) => (todo.style.display = "block"));
    elementsTwo.forEach((task) => (task.style.display = "block"));
  }
}
