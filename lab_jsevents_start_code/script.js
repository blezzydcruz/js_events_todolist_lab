// LOAD IN HTML TAGS
const form = document.querySelector("#form");
const button = document.querySelector("#enter");
const todo = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const showDate = document.querySelector("#showDate");
const completedList = document.querySelector("#completed list");

// DECLARE VARIABLES WITH GLOBAL SCOPE
let item;
let deleteButton;
let completeButton;

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

    let completeButton = document.createElement("completeButton");
    completeButton.innerText = "    Complete"
    
    // ADD TO LIST
    list.appendChild(newItem);
    // DELETE FROM LIST
    newItem.appendChild(deleteButton);
    newItem.appendChild(completeButton);

    // CHANGES COLOR OF COMPLETED CHORES TO PINK
    completeButton.addEventListener("click", (event) => {
        newItem.style.color = "gray";
        // newItem.textContent = "change text";
        completedList.appendChild(newItem);
        list.removeChild(newItem);
     });

    // DECLARE FUNCTION WITHIN FUNCTION
    deleteButton.addEventListener("click", () => {
        list.removeChild(newItem);

    })
   
})


