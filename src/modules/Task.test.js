import Task from './Task.js';
import DataStore from './DataStore.js';
import 'jest-localstorage-mock';

DataStore.tasks = [];

const task = new Task({ description: "task one", isCompleted: false, index: 1 });

describe("Task CRUD", () => {
  test("add task", () => {
    task.addTask(task);
    expect(DataStore.tasks.length).toBe(1);
  });
  
  test("removeTask", () => {
    task.removeTask(task.index);
    expect(DataStore.tasks.length).toBe(0);
  });
});