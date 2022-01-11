import './style.css';

const tasks = [
  { description: 'Task1', isCompleted: false, index: 4 },
  { description: 'Task2', isCompleted: false, index: 9 },
  { description: 'Task3', isCompleted: false, index: 3 },
  { description: 'Task4', isCompleted: false, index: 1 },
  { description: 'Task5', isCompleted: false, index: 5 },
  { description: 'Task6', isCompleted: true, index: 6 },
  { description: 'Task7', isCompleted: false, index: 7 },
  { description: 'Task8', isCompleted: false, index: 8 },
  { description: 'Task9', isCompleted: false, index: 2 },
];

const compareTaskOrder = (task1, task2) => {
  if (task1.index < task2.index) {
    return -1;
  }
  if (task1.index > task2.index) {
    return 1;
  }
  return 0;
};

const createTaskItem = (task) => {
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `<div class="item-description"><form id="form-is-completed"> 
    <input type="checkbox" name="isCompleted" value=${task.isCompleted}/></form>
    <p>${task.description}</p> </div>
    <i class="fa fa-ellipsis-v"></i>`;
  taskItem.id = task.index;

  return taskItem;
};

const todoListHeading = () => {
  const todoHeading = document.createElement('li');
  todoHeading.innerHTML = `<h2> Today's Tasks </h2>
    <button type='button' class='btn btn-refresh'>
    <i class="fa fa-refresh"></i></button>`;
  todoHeading.classList.add('todo-heading');

  return todoHeading;
};

const formAddTask = () => {
  const form = document.createElement('form');
  form.id = 'form-add-task';
  form.innerHTML = '<input type="text" name="new-task" placeholder="Add task ..."/>';

  const btnAddTask = document.createElement('button');
  btnAddTask.setAttribute('type', 'button');
  btnAddTask.setAttribute('name', 'btnAddNewTask');
  btnAddTask.innerText = 'Add';
  btnAddTask.classList.add('btn', 'btn-add-task');
  form.appendChild(btnAddTask);

  return form;
};

const btnClearAllCompleted = () => {
  const btnClearCompleted = document.createElement('button');
  btnClearCompleted.setAttribute('type', 'button');
  btnClearCompleted.setAttribute('name', 'btnClearCompleted');
  btnClearCompleted.innerText = 'Clear all completed';
  btnClearCompleted.classList.add('btn', 'btn-clear-completed');

  return btnClearCompleted;
};

window.addEventListener('load', () => {
  tasks.sort(compareTaskOrder);

  const todoList = document.querySelector('.todo-list');
  todoList.appendChild(todoListHeading());
  todoList.appendChild(formAddTask());

  tasks.forEach((task) => {
    todoList.appendChild(createTaskItem(task));
  });

  todoList.parentNode.appendChild(btnClearAllCompleted());
});
