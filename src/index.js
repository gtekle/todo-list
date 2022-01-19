import './assets/css/style.css';
import './assets/img/todo-list-desktop-v-snapshot.png';
import Task from './modules/Task.js';
import DataStore from './modules/DataStore.js';

import todoListHeading,
{
  checkRefreshButtonEvent,
} from './components/HeadingTaskListItem.js';
import renderTaskItem, { refreshTaskList } from './components/TaskListItem.js';
import formAddTask from './components/CreateNewTaskItem.js';
import btnClearAllCompleted from './components/ClearAllButton.js';

window.addEventListener('DOMContentLoaded', () => {
  const todoList = document.querySelector('.todo-list');
  todoList.appendChild(todoListHeading());
  todoList.appendChild(formAddTask());
  todoList.parentNode.appendChild(btnClearAllCompleted());

  if (localStorage.getItem('tasks') === 'undefined' || localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  }

  DataStore.tasks = JSON.parse(localStorage.getItem('tasks'));

  DataStore.tasks.forEach((task) => {
    if (task?.description === '') {
      const taskToBeRemoved = new Task();
      taskToBeRemoved.removeTask(parseInt(task.index, 10));
      refreshTaskList();
    } else renderTaskItem(task);
  });

  checkRefreshButtonEvent();
});