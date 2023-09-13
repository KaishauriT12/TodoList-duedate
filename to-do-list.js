const toDoList = [
  { name: "make dinner", duedate: "2023-12-02" },

  { name: "wash dishes", duedate: "2023-12-09" },
];

renderTodoList();

function renderTodoList() {
  let toDoListHTML = "";

  for (let i = 0; i < toDoList.length; i++) {
    const toDoObject = toDoList[i];
    const { name, dueDate } = toDoObject;

    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div>
    <button onclick="
    toDoList.splice(${i}, 1);
    renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    toDoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = toDoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  toDoList.push({
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}
