const addTaskBtn = document.getElementById("addTaskBtn");
const taskInputWrapper = document.getElementById("taskInputWrapper");
const taskInput = document.getElementById("taskInput");
const saveTaskBtn = document.getElementById("saveTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
let selectedCount = 0;

addTaskBtn.addEventListener("click", function () {
  taskInputWrapper.style.display = "block";
});

saveTaskBtn.addEventListener("click", function () {
  const task = taskInput.value.trim();
  if (task !== "") {
    saveTask(task);
    displayTasks();
    taskInput.value = "";
    taskInputWrapper.style.display = "none";
  }
});

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ task: task, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
  taskList.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  selectedCount = 0;
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    const completedClass = task.completed ? "completed" : "";

    taskItem.innerHTML = `
            <input type="checkbox" id="task${index}" ${
      task.completed ? "checked" : ""
    }>
            <label for="task${index}" contenteditable="true" id="completed" class="${completedClass}">${
      task.task
    }</label>
        `;
    const editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>  `;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
    });

    editBtn.addEventListener("click", function () {
      const label = taskItem.querySelector("label");
      label.contentEditable = true;
      label.focus();

      label.addEventListener("blur", function () {
        const editedTask = label.textContent.trim();
        tasks[index].task = editedTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
      });
    });

    editBtn.style.display = "none";
    deleteBtn.style.display = "none";

    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    taskItem
      .querySelector(`#task${index}`)
      .addEventListener("change", function () {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        selectedCount = tasks.filter((task) => task.completed).length;
        updateTaskCount(tasks.length, selectedCount);

        if (task.completed) {
          editBtn.style.display = "inline-block";
          deleteBtn.style.display = "inline-block";
        } else {
          editBtn.style.display = "none";
          deleteBtn.style.display = "none";
        }
      });

    taskList.appendChild(taskItem);
  });

  updateTaskCount(tasks.length, selectedCount);
}

function updateTaskCount(totalCount, selectedCount) {
  taskCount.innerHTML = `${selectedCount} / ${totalCount}  `;
}
displayTasks();

const currentDate = new Date();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeek = weekdays[currentDate.getDay()];
document.querySelector(".dayOfWeek").textContent = dayOfWeek;
document.querySelector(".dayOfWeek1").textContent = dayOfWeek;

const addTaskBtn2 = document.getElementById("addTaskBtn2");
const taskInputWrapper2 = document.getElementById("taskInputWrapper2");
const taskInput2 = document.getElementById("taskInput2");
const saveTaskBtn2 = document.getElementById("saveTaskBtn2");
const taskList2 = document.getElementById("taskList2");
const taskCount2 = document.getElementById("taskCount2");
let selectedCount2 = 0;

addTaskBtn2.addEventListener("click", function () {
  taskInputWrapper2.style.display = "block";
});

saveTaskBtn2.addEventListener("click", function () {
  const task2 = taskInput2.value.trim();
  if (task2 !== "") {
    saveTask2(task2);
    displayTasks2();
    taskInput2.value = "";
    taskInputWrapper2.style.display = "none";
  }
});
function saveTask2(task) {
  let tasks2 = JSON.parse(localStorage.getItem("tasks2")) || [];
  tasks2.push({ task: task, completed: false });
  localStorage.setItem("tasks2", JSON.stringify(tasks2));
}

function displayTasks2() {
  const taskList2 = document.getElementById("taskList2");
  if (!taskList2) {
    console.error("taskList2 element not found");
    return;
  }

  taskList2.innerHTML = "";
  const tasks2 = JSON.parse(localStorage.getItem("tasks2")) || [];
  let selectedCount2 = 0;

  tasks2.forEach((task2, index) => {
    const taskItem2 = document.createElement("div");
    taskItem2.classList.add("task-item");

    const completedClass = task2.completed ? "completed" : "";
    taskItem2.innerHTML = `
          <input type="checkbox" id="taska${index}" ${
      task2.completed ? "checked" : ""
    }>
          <label for="taska${index}" contenteditable="true" id="completed" class="${completedClass}">${
      task2.task
    }</label>
      `;

    const editBtn2 = document.createElement("button");
    editBtn2.classList.add("editBtn");
    editBtn2.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;

    const deleteBtn2 = document.createElement("button");
    deleteBtn2.classList.add("deleteBtn");
    deleteBtn2.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    deleteBtn2.addEventListener("click", function () {
      tasks2.splice(index, 1);
      localStorage.setItem("tasks2", JSON.stringify(tasks2));
      displayTasks2();
    });

    editBtn2.addEventListener("click", function () {
      const label2 = taskItem2.querySelector("label");
      if (!label2) return;
    
      label2.contentEditable = true; 
      label2.focus(); 
    
      label2.addEventListener("blur", function () {
        const editedTask2 = label2.textContent.trim();
        tasks2[index].task = editedTask2; 
        localStorage.setItem("tasks2", JSON.stringify(tasks2));
        displayTasks2();
      });
    });

    taskItem2.appendChild(editBtn2);
    taskItem2.appendChild(deleteBtn2);

    taskItem2
      .querySelector(`#taska${index}`)
      .addEventListener("change", function () {
        task2.completed = !task2.completed;
        localStorage.setItem("tasks2", JSON.stringify(tasks2));
        selectedCount2 = tasks2.filter((task2) => task2.completed).length;
        updateTaskCount2(tasks2.length, selectedCount2);

        if (task2.completed) {
          editBtn2.style.display = "inline-block";
          deleteBtn2.style.display = "inline-block";
        } else {
          editBtn2.style.display = "none";
          deleteBtn2.style.display = "none";
        }
      });

    taskList2.appendChild(taskItem2);
  });

  updateTaskCount2(tasks2.length, selectedCount2);
}

function updateTaskCount2(totalCount2, selectedCount2) {
  taskCount2.innerHTML = `${selectedCount2} / ${totalCount2}  `;
}

displayTasks2();
