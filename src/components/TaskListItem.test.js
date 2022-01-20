import Task from '../modules/Task.js';
import DataStore from '../modules/DataStore.js';
import 'jest-localstorage-mock';
import renderTaskItem, { isTaskCompleted } from "./TaskListItem.js";
import btnClearAllCompleted from './ClearAllButton.js';

const task = new Task('task one', false, 1);

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
    const taskStatus = document.querySelector('.task #chkcompleted-1')
    const prevTaskStatus = taskStatus.checked

    // taskStatus().simulate('click')
    isTaskCompleted()
    expect(taskStatus.checked).toBe(!prevTaskStatus);
  });
});