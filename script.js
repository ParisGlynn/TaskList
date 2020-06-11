let tasksArray;

// Get DOM elements

const taskInput = document.getElementById('task-input');
const addTask = document.getElementById('add-task');
const tasks = document.getElementById('tasks');
const clearBtn = document.getElementById('clearBtn');

taskInput.focus();

// Grab tasks from local storage
if(localStorage.getItem('tasks') !== null) {
  tasksArray = JSON.parse(localStorage.getItem('tasks'));
} else {
  tasksArray = [];
}

AddTasksToDOM();

// Add tasks to DOM
function AddTasksToDOM (){
  tasksArray.forEach(task => {
    const taskEl = document.createElement('div');
    taskEl.classList.add('task');
    taskEl.innerHTML = `
      <span>${task}</span>
      <i class = 'fas fa-times'></i>
      `
      tasks.appendChild(taskEl);
  });
}




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
    
    tasksArray.push(taskInput.value);
    localStorage.setItem('tasks', JSON.stringify(tasksArray));

    taskInput.value = '';
    taskInput.focus();
}

// Clear tasks
function clearAllTasks() {
  tasks.innerHTML = '';
  localStorage.clear();
}

// Remove task
function removeTask(e) {
    if(e.target.classList.value === 'fas fa-times') {

      // Remove element
      const taskToRemove = e.target.parentElement;
      taskToRemove.remove();

      // Remove from local storage
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.forEach((task, index) => {
      if(task === taskToRemove.innerText.trim()) {
        tasksArray.splice(index, 1);
      }
    });
    // Put array back into local storage
    localStorage.setItem('tasks', JSON.stringify(tasksArray)); 
  } 

  // Repopulate DOM
  tasks.innerHTML = '';
  AddTasksToDOM();  
}

