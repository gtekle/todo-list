import Task from './Task.js';
import DataStore from './DataStore.js';
import 'jest-localstorage-mock';
import renderTaskItem from '../components/TaskListItem.js';
import btnClearAllCompleted from '../components/ClearAllButton.js';

DataStore.tasks = [];

const task = new Task({ description: 'task one', isCompleted: false, index: 1 });

describe('add Task', () => {
  test('add method', () => {
    task.addTask(task);
    expect(DataStore.tasks.length).toBe(1);
  });

  test('render Task item to the list', () => {
    document.body.innerHTML = '<ul id="list" class="todo-list"></ul>';
    document.body.appendChild(btnClearAllCompleted());
    renderTaskItem(task);
    const list = document.querySelectorAll('.task');
    expect(list).toHaveLength(1);
  });
});

describe('remove Task', () => {
  test('removeTask', () => {
    task.removeTask(task.index);
    expect(DataStore.tasks.length).toBe(0);
  });

  test('remove Task from DOM', () => {
    task.removeTask(task.index);
    expect(DataStore.tasks.length).toBe(0);
  });
});
