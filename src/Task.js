import DataStore from "./DataStore";

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
    DataStore.deleteTask(index);
  }
}