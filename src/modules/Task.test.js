import Task from './Task.js';
import DataStore from './DataStore.js';
import 'jest-localstorage-mock';
import renderTaskItem from '../components/TaskListItem.js';
import btnClearAllCompleted from '../components/ClearAllButton.js';

const task = new Task('task one', false, 1);

beforeAll(() => {
  const todoList = document.createElement('ul');
  todoList.classList.add('todo-list');
  document.body.appendChild(todoList);
  document.body.appendChild(btnClearAllCompleted());
  DataStore.tasks = [];
});

describe('add Task', () => {
  test('add method', () => {
    task.addTask(task);
    expect(DataStore.tasks.length).toBe(1);
  });

  test('render task item to the list', () => {
    renderTaskItem(task);
    const list = document.querySelectorAll('.task');
    expect(list).toHaveLength(1);
  });
});

describe('edit Task', () => {
  test('editTask method', () => {
    task.editTask('task one edited', task.index);
    expect(DataStore.tasks[task.index - 1].description).toBe('task one edited');
  });

  test('render task with edit description in DOM', () => {
    const targetTask = document.getElementById(task.index);
    targetTask.parentNode.removeChild(targetTask);
    renderTaskItem(DataStore.tasks[task.index - 1]);
    const updateTaskDescription = document.querySelector('.task .task-description');
    expect(updateTaskDescription.innerHTML).toBe('task one edited');
  });
});

describe('remove Task', () => {
  test('removeTask method', () => {
    task.removeTask(task.index);
    expect(DataStore.tasks.length).toBe(0);
  });

  test('remove task from DOM', () => {
    const targetTask = document.getElementById(task.index);
    targetTask.parentNode.removeChild(targetTask);
    const deletedTask = document.querySelectorAll('li .task');
    expect(deletedTask).toHaveLength(0);
  });
});
