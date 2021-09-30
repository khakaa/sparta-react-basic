function completeTodo(e) {
  e.target.parentElement.style.backgroundColor = "green";
}

function addCard() {
  const new_todo = document.createElement("div"); // html 요소를 create
  new_todo.className = "todo-card"; // 클래스 값 설정

  const title = document.createElement("h3");
  title.textContent = document.getElementsByClassName("add-input")[0].value;
  const button = document.createElement("button");
  button.textContent = "완료";

  button.addEventListener("click", completeTodo);
  new_todo.appendChild(title);
  new_todo.appendChild(button);

  document.getElementsByClassName("card-list")[0].appendChild(new_todo);
}

// title.textContent = document.getElementsByClassName("add-input").value;
// console.log(textContent);
