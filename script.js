// script.js

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    // Load tasks from localStorage
    const loadTasks = () => {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.forEach(task => createTaskElement(task));
    };
  
    // Save tasks to localStorage
    const saveTasks = () => {
      const tasks = Array.from(taskList.children).map(task => task.firstChild.textContent);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  
    // Create a new task element
    const createTaskElement = (task) => {
      const li = document.createElement("li");
      li.classList.add("task");
  
      const taskText = document.createElement("span");
      taskText.textContent = task;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Remove";
      deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
      });
  
      li.appendChild(taskText);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    };
  
    // Add new task
    addTaskBtn.addEventListener("click", () => {
      const task = taskInput.value.trim();
      if (task) {
        createTaskElement(task);
        saveTasks();
        taskInput.value = "";
      }
    });
  
    loadTasks();
  });
  