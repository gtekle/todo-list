import Task from './Task.js';
import DataStore from './DataStore';
import { checkForEvents } from './CustomEventHandlers.js';

const renderTaskItem = (task) => {
  if (!task) return;

  const tasksContainer = document.querySelector('.todo-list');
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `<div class="item-description"><form id="form-is-completed"> 
    <input type="checkbox" id='chkcompleted-${task.index}' name="isCompleted" value=${task.isCompleted}></input></form>
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

    if (localStorage.getItem('tasks') === 'undefined') {
      localStorage.setItem('tasks', JSON.stringify([]));
    }

    DataStore.tasks = JSON.parse(localStorage.getItem('tasks'));

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

export { btnClearAllCompleted, formAddTask, todoListHeading, renderTaskItem };