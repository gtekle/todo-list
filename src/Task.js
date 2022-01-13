import DataStore from './DataStore.js';

export default class Task {
  constructor(description, isCompleted = false, index) {
    this.description = description;
    this.isCompleted = isCompleted;
    this.index = index;
  }

  addTask() {
    DataStore.saveTasks(this);
  }

  removeTask(index) {
    this.index = index;
    DataStore.deleteTask(this.index);
  }

  editTask(description, index) {
    this.index = index;
    DataStore.editTask(description, this.index);
  }
}