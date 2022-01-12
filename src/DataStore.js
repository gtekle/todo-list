export default class DataStore {
  static constructor() {
    this.tasks = [];
  }

  static getTasks() {
    this.tasks = localStorage.getItem(JSON.parse('tasks'));
    return localStorage.getItem(this.tasks);
  }

  static saveTasks(task) {
    console.log('task to save', task);
    console.log('tasks', this.tasks);
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  static deleteTask(index) {
    this.tasks.filter((task) => task.index === index);
  }
}