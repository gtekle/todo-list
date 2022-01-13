export default class DataStore {
  static constructor() {
    this.tasks = [];
  }

  static getTasks() {
    this.tasks = localStorage.getItem(JSON.parse('tasks'));
    return this.tasks;
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
    this.tasks = this.tasks.filter((task, inx) => inx !== index);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}