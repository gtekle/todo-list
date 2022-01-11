const tasks = [
  { description: 'Task1', isCompleted: false, index: 1 },
  { description: 'Task2', isCompleted: false, index: 2 },
  { description: 'Task3', isCompleted: false, index: 3 },
  { description: 'Task4', isCompleted: false, index: 4 },
  { description: 'Task5', isCompleted: false, index: 5 },
  { description: 'Task6', isCompleted: false, index: 6 },
  { description: 'Task7', isCompleted: false, index: 7 },
  { description: 'Task8', isCompleted: false, index: 8 },
  { description: 'Task9', isCompleted: false, index: 9 },
];

window.addEventListener('load', () => {
  const todoList = document.querySelector('.todo-list');

  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    const form = document.createElement('form');
    form.innerHTML = '<input type="checkbox" name="isCompleted" value=${task.isCompleted}/>';
    const taskDescription = document.createElement('p');
    taskDescription.textContent = task.description;

    taskItem.id = task.index;
    taskItem.appendChild(form);
    taskItem.appendChild(taskDescription);

    todoList.appendChild(taskItem);
  })
});