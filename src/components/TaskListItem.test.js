import 'jest-localstorage-mock';
import Task from '../modules/Task.js';
import DataStore from '../modules/DataStore.js';
import renderTaskItem, { isTaskCompleted, clearAllCompletedTasksEvent } from './TaskListItem.js';
import btnClearAllCompleted from './ClearAllButton.js';

const $ = require('jquery');

const task = new Task('task bone', false, 1);

beforeAll(() => {
  const todoList = document.createElement('ul');
  todoList.classList.add('todo-list');
  document.body.appendChild(todoList);
  document.body.appendChild(btnClearAllCompleted());
  DataStore.tasks = [];
});

describe('completed status', () => {
  test('completed status', () => {
    task.addTask(task);
    renderTaskItem(task);
    const taskStatus = document.getElementById(`chkcompleted-${task.index}`);
    const prevTaskStatus = taskStatus.checked;
    $(taskStatus).click();
    isTaskCompleted();
    expect(taskStatus.checked).toBe(!prevTaskStatus);
  });
});

describe('clear all completed tasks', () => {
  test('clear all completed tasks', () => {
    task.addTask(task);
    renderTaskItem(task);
    const taskStatus = document.getElementById(`chkcompleted-${task.index}`);
    $(taskStatus).click();
    clearAllCompletedTasksEvent();
    const deletedTask = document.querySelectorAll('li .task');
    expect(deletedTask).toHaveLength(0);
  });
});