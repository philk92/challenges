const todos = [];
const inputForm = document.querySelector(".inputForm");
const input = document.querySelector("#todoInput");
const listContainer = document.querySelector(".listContainer");
const doneContainer = document.querySelector(".doneContainer");
const delButtons = document.querySelectorAll(".delButton");
const buttonGroup = document.querySelector(".btngroup");

// Hört auf input-form und gibt den Wert an createTask weiter
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value != 0) {
    createTask(input.value);
  }
});

function createTask(todo) {
  // Erstellt den Aufgabencontainer, Checkbox, Text und Löschbutton
  let borderDiv = document.createElement("div");
  let checkBox = document.createElement("input");
  let todoText = document.createElement("span");
  let delButton = document.createElement("button");
  // Fügt die richtigen CSS-Klassen hinzu
  borderDiv.classList.add("borderDiv");
  checkBox.setAttribute("type", "checkbox");
  checkBox.classList.add("checkBox");
  todoText.classList.add("todoText");
  delButton.classList.add("btn", "btn-sm", "btn-outline-danger", "delButton");
  // Schreibt den richtigen Text (todo kommt aus inputForm.addEventListener)
  todoText.innerText = todo;
  delButton.innerText = "X";
  // Fügt alles an der richtigen Stelle ein
  borderDiv.append(checkBox);
  borderDiv.append(todoText);
  borderDiv.append(delButton);
  listContainer.append(borderDiv);
  // Schreibt das Todo in das Array todos, Array bisher ungenutzt!
  todos.push(`{name: ${todo}, status: false}`);
  // Leert das Eingabefeld
  input.value = "";
  checkEmpty();
}

listContainer.addEventListener("click", (e) => {
  // Button löscht übergeordnetes Element = borderDiv]
  e.target.nodeName == "BUTTON" && e.target.parentElement.remove();
  // Checkbox gibt nextSibling = span die Klasse 'done'
  e.target.nodeName == "INPUT" && done(e);
  checkEmpty();
});

doneContainer.addEventListener("click", (e) => {
  // Button löscht übergeordnetes Element = borderDiv]
  e.target.nodeName == "BUTTON" && e.target.parentElement.remove();
  // Checkbox gibt nextSibling = span die Klasse 'undone'
  e.target.nodeName == "INPUT" && undone(e);
  checkEmpty();
});

// togglet die Checkbox, fügt Task zu Done-Kategorie
function done(e) {
  e.target.nextSibling.classList.toggle("done");
  doneContainer.append(e.target.parentElement);
  checkEmpty();
}

// togglet die Checkbox, fügt Task zu Todo-Kategorie
function undone(e) {
  e.target.nextSibling.classList.toggle("done");
  listContainer.append(e.target.parentElement);
  checkEmpty();
}

// Funktion für onclick Delete All Button
function deleteAll() {
  let entries = document.querySelectorAll(".borderDiv");
  for (const entry of entries) {
    entry.remove();
    checkEmpty();
  }
}
// Blendet leere Kategorien aus
function checkEmpty() {
  if (listContainer.children[1] === undefined) {
    listContainer.style.display = "none";
  } else {
    listContainer.style.removeProperty("display");
  }
  if (doneContainer.children[1] === undefined) {
    doneContainer.style.display = "none";
  } else {
    doneContainer.style.removeProperty("display");
  }
}
// Funktion für onclick Delete Done Button
function deleteDone() {
  let entries = document.querySelectorAll(".done");
  for (const entry of entries) {
    entry.parentElement.remove();
  }
  checkEmpty();
}

// Funktion für onclick Mark Done Button
function markDone() {
  let entries = document.querySelectorAll(".borderDiv");
  for (const entry of entries) {
    entry.children[1].classList.add("done");
    entry.children[0].checked = true;
    doneContainer.append(entry);
  }
  checkEmpty();
}

// Blendet am Anfang die leeren Kategorien aus
checkEmpty();
