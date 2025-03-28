document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //parse converts string to orignal data structure

  tasks.forEach((task) => {
    render(task);
  });

  addTaskButton.addEventListener("click", function () {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: true,
    };

    tasks.push(newTask);
    saveTask();
    todoInput.value = ""; //clear input
    console.log(tasks);
  });

  function render(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `<span>${task.text}</span>
    <button>Delete</button>`;
    li.addEventListener("click", function (e) {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask(``);
    });

    li.querySelector("button").addEventListener("click", function (e) {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
    });
    todoList.append(li);
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //to save it in local storage  && stringify -> converts the Json format into stings
  }
});
