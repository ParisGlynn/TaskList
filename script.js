// Get DOM elements

const taskInput = document.getElementById('task-input');
const addTask = document.getElementById('add-task');
const tasks = document.getElementById('tasks');
const clearBtn = document.getElementById('clearBtn');

taskInput.focus();

// Event Listeners

addTask.addEventListener('submit', addATask);
clearBtn.addEventListener('click', clearAllTasks);
tasks.addEventListener('click', removeTask);

// Add a task
function addATask(e) {
  e.preventDefault();

  const taskEl = document.createElement('div');
  taskEl.classList.add('task');
  taskEl.innerHTML = `
    <span>${taskInput.value}</span>
    <i class = 'fas fa-times'></i>
    `
    tasks.appendChild(taskEl);

    taskInput.value = '';
    taskInput.focus();
}

// Clear tasks
function clearAllTasks() {
  tasks.innerHTML = '';
}

// Remove task
function removeTask(e) {
  if(e.target.classList.value === 'fas fa-times') {
    const taskToRemove = e.target.parentElement;
    taskToRemove.remove();
  }
}

