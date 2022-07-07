class Task {
  constructor(_text) {
    this.id = "_" + Math.random().toString(36).slice(2);
    this.text = _text;
    this.status = "todo"; //done delete
    this.created_at = new Date();
    this.done_at = null;
    this.deleted_at = null;
  }
  changeStatus(status) {
    this.status = status;
    status === "delete"
      ? (this.deleted_at = new Date())
      : (this.done_at = new Date());
    const element = document.querySelector("#" + this.id);
    element.classList.add(status);
    element.classList.remove("todo");
  }
  done() {
    this.changeStatus("done");
    // this.status = "done";
    // this.done_at = new Date();
    // const element = document.querySelector("#" + this.id);
    // element.classList.add("done");
    // element.classList.remove("todo");
  }

  delete() {
    this.changeStatus("delete");
    // this.status = "delete";
    // this.done_at = new Date();
    // const element = document.querySelector("#" + this.id);
    // element.classList.add("delete");
    // element.classList.remove("todo");
  }

  update(newText) {
    //Busco element = etiqueta <p> el id del <p>

    const element = document.querySelector(`#${this.id}`);
    //children: busca los elementos hijos
    //recuerden que se pone [0] porque <p> tiene 2 div hijos
    // const primerDiv = element.children[0];
    // const span = (primerDiv.children[1].textContent = newText);
    // console.log(element);
    // console.log(element.children[0]);
    // console.log(element.children[0].children[1]);
    element.children[0].children[1].textContent = newText;
  }

  createElement() {
    const element = document.createElement("p");
    element.setAttribute("id", this.id);
    element.setAttribute("class", "task todo");
    element.innerHTML = `
    <div>
          <input type="checkbox" onchange="checkTask(this);" />
          <span>${this.text}</span>
    </div>
    <div>
          <a onclick="updateTask(this);">✏️</a>
          <a onclick="deleteTask(this);">❌</a>
    </div>
    `;
    return element;
  }
}
//Lista de elementos en html nodeList
