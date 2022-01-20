export default class DataStore {
  static constructor() {
    this.tasks = [];
  }

  static getTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    return JSON.parse(localStorage.getItem('tasks'));
  }

  static saveTasks(task) {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  static editTask(newDescription, index) {
    this.tasks[index].description = newDescription;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  static deleteTask(index) {
    this.tasks = this.tasks.filter((task) => task.index !== index);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    DataStore.updateTaskIndex();
  }

  static updateTaskIndex() {
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.tasks[i].index = i + 1;
    }

    localStorage.setItem('tasks', JSON.stringify(this.tasks));

    return this.tasks;
  }

  static swapTasks(taskOneIndex, taskTwoIndex) {
    const temp = this.tasks[taskTwoIndex];
    this.tasks[taskTwoIndex] = this.tasks[taskOneIndex];
    this.tasks[taskOneIndex] = temp;

    DataStore.updateTaskIndex();
  }
}