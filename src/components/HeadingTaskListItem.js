import { refreshTaskList, clearAllCompletedTasksEvent } from './TaskListItem.js';

const todoListHeading = () => {
  const todoHeading = document.createElement('li');
  todoHeading.innerHTML = `<h2> Today's Tasks </h2>
    <button type='button' class='btn btn-refresh'>
    <i class="fa fa-refresh"></i></button>`;
  todoHeading.classList.add('todo-heading');

  return todoHeading;
};

export const checkRefreshButtonEvent = () => {
  const btnRefreshList = document.querySelector('.btn-refresh');

  btnRefreshList.addEventListener('click', (event) => {
    event.stopPropagation();

    refreshTaskList();
  });

  clearAllCompletedTasksEvent();
};

export default todoListHeading;