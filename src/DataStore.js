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

  static deleteTask(index) {
    this.tasks = this.tasks.filter((task) => task.index !== index);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}