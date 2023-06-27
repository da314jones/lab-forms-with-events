const h1 = document.querySelector("h1");
let input = document.createElement("input");
let body = document.querySelector("body");
let errorMessage = document.createElement("p");
errorMessage.style.color = "green";

h1.textContent = "My To-Dos";
let ul = document.createElement("ul");
let form = document.createElement("form");

form.append(input);
input.type = "text";
input.placeholder = "Type a todo";
input.name = "todoItem";

body.appendChild(form);
body.appendChild(errorMessage);

let button = document.createElement("button");
button.type = "submit";
button.textContent = "Submit";
form.append(button);

function makeList(todoItem) {
  let li = document.createElement("li");
  li.style.cursor = "default";
  li.innerText = todoItem;
  ul.appendChild(li);

  let deleteButton = document.createElement("button");

  deleteButton.appendChild(document.createTextNode("Delete"));
  li.appendChild(deleteButton);

  deleteButton.onclick = function() {
    this.parentElement.style.display = "none";
  }

  li.addEventListener("click", () => {
    if (li.style.textDecoration == "line-through") {
      li.style.textDecoration = null;
    } else {
      li.style.textDecoration = "line-through";
    }
    if (li.style.color === "purple") {
      li.style.color = "black";
    } else {
      li.style.color = "purple";
    }
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let todoItem = event.target.todoItem.value;
  
  if (!todoItem) {
    errorMessage.textContent = "Error. Todo cannot be empty";
  } else {
    errorMessage.textContent = "";
    makeList(todoItem);
  }

  form.reset();
});

body.appendChild(ul);