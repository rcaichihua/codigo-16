class Task {
  constructor(_text) {
    this.id = "_" + Math.random().toString(36).slice(2);
    this.text = _text;
    this.status = "todo"; //done delete
    this.created_at = new Date();
    this.done_at = null;
    this.deleted_at = null;
  }

  done() {
    this.status = "done";
    this.done_at = new Date();
    document.querySelector("#" + this.id).classList.add("done");
  }

  delete() {
    this.status = "delete";
    this.done_at = new Date();
    document.querySelector("#" + this.id).classList.add("delete");
  }

  createElement() {
    const element = document.createElement("p");
    element.setAttribute("id", this.id);
    element.setAttribute("class", "task");
    element.innerHTML = `
          <input type="checkbox" onchange="checkTask(this);" />
          <span>${this.text}</span>
          <a onclick="deleteTask(this);">❌</a>
    `;
    return element;
  }
}
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
    const task_id = checkbox.parentElement.id;
    const task = arrayTasks.find((task) => task.id == task_id);
    task.done();
    checkbox.setAttribute("disabled", true);
  }
}

function deleteTask(anchor) {
  const task_id = anchor.parentElement.id;
  const task = arrayTasks.find((task) => task.id == task_id);
  task.delete();
}
