// LOAD IN HTML TAGS
const form = document.querySelector("#form");
const button = document.querySelector("#enter");
const todo = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const showDate = document.querySelector("#showDate");

// DECLARE VARIABLES WITH GLOBAL SCOPE
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
 
    // CREATE DELETE BUTTON
    let deleteButton = document.createElement("deleteButton");
    deleteButton.innerText = "  Delete";
    
    // ADD TO LIST
    list.appendChild(newItem);
    // DELETE FROM LIST
    newItem.appendChild(deleteButton);

    // DECLARE FUNCTION WITHIN FUNCTION
    deleteButton.addEventListener("click", () => {
        list.removeChild(newItem);
   
})

})
