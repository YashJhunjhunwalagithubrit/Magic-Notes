
// get references to the input and the list
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

// add an event listener to the form to add new tasks
document.querySelector("#task-form").addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting

  // get the value of the input and create a new list item
  const taskText = taskInput.value;
  const newTask = document.createElement("li");
  newTask.textContent = taskText;

    console.log(taskText);
  // add a button to delete the task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    newTask.remove(); // remove the task when the delete button is clicked
  });
  newTask.appendChild(deleteButton);

  // add the new task to the list and clear the input
  taskList.appendChild(newTask);
  taskInput.value = "";
});

