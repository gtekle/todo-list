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
  }

  static updateTaskIndex() {
    const storedTasks = DataStore.getTasks();
    for (let i = 0; i < storedTasks.length; i += 1) {
      storedTasks[i].index = i + 1;
    }
    localStorage.setItem('tasks', JSON.stringify(storedTasks));

    return storedTasks;
  }
}