// Get elements from the DOM
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Load tasks from local storage or create an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks from the local storage
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.className = "task" + (task.completed ? " completed" : "");
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""}>
            <span>${task.text}</span>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(taskItem);

        // Add event listener to the checkbox
        const checkbox = taskItem.querySelector("input");
        checkbox.addEventListener("change", () => {
            tasks[index].completed = checkbox.checked;
            updateLocalStorage();
            displayTasks();
        });

        // Add event listener to the delete button
        const deleteButton = taskItem.querySelector(".deleteButton");
        deleteButton.addEventListener("click", () => {
            tasks.splice(index, 1);
            updateLocalStorage();
            displayTasks();
        });
    });
}

// Update local storage with the current tasks
function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add a new task
addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        updateLocalStorage();
        taskInput.value = "";
        displayTasks();
    }
});

// Display initial tasks
displayTasks();
