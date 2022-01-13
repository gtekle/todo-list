import './style.css';
import Task from './Task.js';
import DataStore from './DataStore.js';
import { checkForEvents, refreshTaskList } from './CustomEventHandlers.js';
import {
  renderTaskItem,
  todoListHeading,
  formAddTask,
  btnClearAllCompleted
} from './UserInterface.js'

window.addEventListener('load', () => {
  const todoList = document.querySelector('.todo-list');

  todoList.appendChild(todoListHeading());
  todoList.appendChild(formAddTask());
  if (localStorage.getItem('tasks') === 'undefined' || localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  }

  DataStore.tasks = JSON.parse(localStorage.getItem('tasks'));

  DataStore.tasks.forEach((task) => {
    if (!task.description) {

      const taskToBeRemoved = new Task();
      taskToBeRemoved.removeTask(parseInt(task.index));
      refreshTaskList();
    } else renderTaskItem(task);
  });

  todoList.parentNode.appendChild(btnClearAllCompleted());

  checkForEvents();
}
);