import Task from '../modules/Task.js';
import DataStore from '../modules/DataStore.js';

import renderTaskItem, { refreshTaskList } from './TaskListItem.js';

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
    refreshTaskList();
    newTask.value = '';
    newTask.style.focus = false;
  });
  return form;
};

export default formAddTask;