document.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModal");
  const span = document.querySelector(".close"); // Assuming there's only one '.close' class in your modal
  const addTaskButton = document.getElementById("addTask");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // add a task
  function addTask() {
    let task = taskInput.value.trim();
    if (task !== "") {
      let li = document.createElement("li");
      li.textContent = task;
      taskList.appendChild(li);
      taskInput.value = "";

      // save to local storage
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  // event listeners
  btn.addEventListener("click", openModal);
  span.addEventListener("click", closeModal);
  addTaskButton.addEventListener("click", addTask);

  // load tasks from local storage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
});
