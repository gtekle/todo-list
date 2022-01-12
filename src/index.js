import './style.css';
import Task from './Task.js';
import DataStore from './DataStore';

const compareTaskOrder = (task1, task2) => {
  if (task1.index < task2.index) {
    return -1;
  }
  if (task1.index > task2.index) {
    return 1;
  }
  return 0;
};

const renderTaskItem = (task) => {
  if (!task) return;
  const tasksContainer = document.querySelector('.todo-list');
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `<div class="item-description"><form id="form-is-completed"> 
    <input type="checkbox" name="isCompleted" value=${task.isCompleted}/></form>
    <p class="task-description">${task.description}</p></div>
    <button type='button' class='btn btn-v-ellipsis'><i class="fa fa-ellipsis-v"></i></button>
    <button type='button' class='btn btn-trash d-off'><i class="fa fa-trash" aria-hidden="true"></i></button>`;
  taskItem.id = task.index;
  taskItem.classList.add('task')

  tasksContainer.appendChild(taskItem);
};

const todoListHeading = () => {
  const todoHeading = document.createElement('li');
  todoHeading.innerHTML = `<h2> Today's Tasks </h2>
    <button type='button' class='btn btn-refresh'>
    <i class="fa fa-refresh"></i></button>`;
  todoHeading.classList.add('todo-heading');

  return todoHeading;
};

const formAddTask = () => {
  const form = document.createElement('form');
  form.id = 'form-add-task';
  form.innerHTML = `<input type="text" name="newTask" placeholder="Add new task ..." required/>
    <button type="submit" tabindex=-1 class="btn btn-add-task">
    <i class="material-icons">&#xe31b;</i>
    </button>`;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const { newTask } = form.elements;
    const task = new Task(newTask.value, false, DataStore.tasks.length + 1);
    task.addTask();
    renderTaskItem(task);
    checkForEvents();
  })

  return form;
};

const btnClearAllCompleted = () => {
  const btnClearCompleted = document.createElement('button');
  btnClearCompleted.setAttribute('type', 'button');
  btnClearCompleted.setAttribute('name', 'btnClearCompleted');
  btnClearCompleted.innerText = 'Clear all completed';
  btnClearCompleted.classList.add('btn', 'btn-clear-completed');

  return btnClearCompleted;
};

window.addEventListener('load', () => {
  if (localStorage.getItem('tasks') === 'undefined') {
    localStorage.setItem('tasks', JSON.stringify([]));
  }

  DataStore.tasks = JSON.parse(localStorage.getItem('tasks'));

  const todoList = document.querySelector('.todo-list');
  todoList.appendChild(todoListHeading());
  todoList.appendChild(formAddTask());

  DataStore.tasks.forEach((task) => {
    renderTaskItem(task);
  });

  todoList.parentNode.appendChild(btnClearAllCompleted());

  checkForEvents();
});

const checkForEvents = () => {
  const allTasks = document.querySelectorAll('.task');
  allTasks.forEach(task => {
    task.addEventListener('click', () => {
      task.childNodes[0].childNodes[2].contentEditable = true;
      task.childNodes[0].childNodes[2].focus();
      task.childNodes[0].childNodes[2].style.outline = 'none';
      task.style.backgroundColor = 'lightgreen';
      task.childNodes[0].childNodes[2].style.color = 'blue';
      task.childNodes[2].classList.add('d-off');
      task.childNodes[4].classList.remove('d-off');

      task.childNodes[4].addEventListener('click', () => {
        console.log('clicked delete');
        console.log(task, ' to be removed');
        const targetTask = new Task();
        targetTask.removeTask(parseInt(task.id))
        task.parentNode?.removeChild(task);
      });

      allTasks.forEach(inactiveTask => {
        if (task !== inactiveTask) {
          inactiveTask.childNodes[0].childNodes[2].contentEditable = false;
          inactiveTask.style.backgroundColor = '#fff';
          inactiveTask.childNodes[0].childNodes[2].style.color = '#000';
          inactiveTask.childNodes[0].childNodes[2].style.opacity = '0.8';
          inactiveTask.childNodes[0].childNodes[2].style.border = 'none';
          inactiveTask.childNodes[4].classList.add('d-off');
          inactiveTask.childNodes[2].classList.remove('d-off');
        }
      });
    });
  })
}

