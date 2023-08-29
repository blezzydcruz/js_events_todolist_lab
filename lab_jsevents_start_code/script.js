const form = document.querySelector("#form");
const button = document.querySelector("#enter");
const todo = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const showDate = document.querySelector("#showDate");

let item;
let deleteButton;

//  Text Input
todo.addEventListener("input", (event) => {
    item = event.target.value;
})

//  add to list Button
button.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = item;
   
    let deleteButton = document.createElement("deleteButton");
    deleteButton.innerText = "  Delete";
    
    list.appendChild(newItem);
    newItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        list.removeChild(newItem);
   
})

})

//  Show Date
