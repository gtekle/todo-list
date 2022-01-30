import DataStore from '../modules/DataStore.js';
import Task from '../modules/Task.js';

export const refreshTaskList = () => {
  const tasks = document.querySelectorAll('.task');
  tasks.forEach((prevTask) => {
    prevTask.parentNode.removeChild(prevTask);
  });

  DataStore.tasks = DataStore.updateTaskIndex();
  DataStore.tasks.forEach((task) => {
    // eslint-disable-next-line
    renderTaskItem(task);
  });
};

export const isTaskCompleted = () => {
  const completedTasks = document.querySelectorAll('input[name="isCompleted"]');
  completedTasks.forEach((btnIsCompleted) => {
    btnIsCompleted.addEventListener('click', () => {
      if (btnIsCompleted.checked) {
        btnIsCompleted.checked = true;
        btnIsCompleted.parentNode.nextSibling.nextSibling.style.textDecoration = 'line-through';
      } else {
        btnIsCompleted.checked = false;
        btnIsCompleted.parentNode.nextSibling.nextSibling.style.textDecoration = '';
      }
    });
  });
};

export const isTaskClicked = () => {
  const allTasks = document.querySelectorAll('.task');

  allTasks.forEach((task) => {
    const newTaskDescription = ['', ''];

    const [descriptionDiv, , btnMove, , btnDelete] = task.childNodes;
    const [, , description] = descriptionDiv.childNodes;

    task.addEventListener('click', () => {
      newTaskDescription[0] = description.innerText;
      newTaskDescription.push(parseInt(task.id, 10));
      description.contentEditable = true;
      description.focus();

      // The following two lines of code are used to move the cursor
      // to the end of existing text in contentEditable HTML5 elements.
      document.execCommand('selectAll', false, null);
      document.getSelection().collapseToEnd();

      task.style.backgroundColor = 'lightgreen';
      description.style.outline = 'none';
      description.style.color = 'blue';
      btnMove.classList.add('d-off');
      btnDelete.classList.remove('d-off');

      if (!btnDelete.classList.contains('d-off')) {
        btnDelete.addEventListener('click', (event) => {
          event.stopImmediatePropagation();

          const task = btnDelete.parentNode;
          const targetTask = new Task();
          targetTask.removeTask(parseInt(task.id, 10));
          task.parentNode.removeChild(task);
          refreshTaskList();
        });
      }

      allTasks.forEach((inactiveTask) => {
        if (task !== inactiveTask) {
          const [descriptionDiv, , btnMove, , btnDelete] = inactiveTask.childNodes;
          const [, , description] = descriptionDiv.childNodes;

          inactiveTask.style.backgroundColor = '#fff';
          description.contentEditable = false;
          description.style.color = '#000';
          description.style.opacity = '0.8';
          description.style.border = 'none';
          btnDelete.classList.add('d-off');
          btnMove.classList.remove('d-off');
        }
      });
    });

    description.addEventListener('input', () => {
      newTaskDescription[1] = description.innerText;
    });

    description.addEventListener('focusout', () => {
      if (newTaskDescription[0] !== newTaskDescription[1] && newTaskDescription[1] !== '') {
        const targetTask = new Task();
        targetTask.editTask(newTaskDescription[1], parseInt(task.id, 10) - 1);
        newTaskDescription.length = 2;
      }
    });
  });
};

const dragDropIndices = [];
export const checkTaskDragEvents = () => {
  const taskItems = document.querySelectorAll('.task');

  taskItems.forEach((task) => {
    task.addEventListener('dragstart', () => {
      if (dragDropIndices.length === 0) {
        dragDropIndices.push(parseInt(task.id, 10) - 1);
      }
    });

    task.addEventListener('dragover', (event) => {
      event.preventDefault();

      task.classList.add('over');
    });

    task.addEventListener('drop', (event) => {
      event.stopImmediatePropagation();

      dragDropIndices.push(parseInt(task.id, 10) - 1);
      task.classList.remove('over');
      DataStore.swapTasks(dragDropIndices[0], dragDropIndices[1]);
      refreshTaskList();
    }, (function runAfterAll() {
      dragDropIndices.length = 0;
    }()));

    task.addEventListener('dragleave', () => {
      task.classList.remove('over');
    });
  });
};

export const clearAllCompletedTasksEvent = () => {
  const btnClearAllCompleted = document.querySelector('.btn-clear-completed');

  btnClearAllCompleted.addEventListener('click', (event) => {
    event.stopImmediatePropagation();

    let completedTasksArray = [];
    const completedTasks = document.querySelectorAll('input[name="isCompleted"]');
    [...completedTasks].filter((btnChecked) => btnChecked.checked === true);
    completedTasks.forEach((btnCheck) => {
      if (btnCheck.checked === true) {
        const targetTaskItem = btnCheck.parentNode.parentNode.parentNode;
        completedTasksArray.push(targetTaskItem);
      }
    });

    completedTasksArray.forEach((item) => {
      const targetListItem = document.getElementById(item.id);
      const targetTask = new Task();
      targetListItem.parentNode.removeChild(targetListItem);
      targetTask.removeTask(parseInt(item.id, 10));
    }, (function runAfterAll() {
      completedTasksArray = [];
      refreshTaskList();
    }()));
  });
};

const renderTaskItem = (task) => {
  if (!task) return;

  const tasksContainer = document.querySelector('.todo-list');
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `<div class="item-description"><form id="form-is-completed">
  <input type="checkbox" id='chkcompleted-${task.index}' name="isCompleted" value=${task.isCompleted}></input></form>
  <p class="task-description">${task.description}</p></div>
  <button type='button' class='btn btn-v-ellipsis'><i class="fa fa-ellipsis-v"></i></button>
  <button type='button' class='btn btn-trash d-off'><i class="fa fa-trash" aria-hidden="true"></i></button>`;
  taskItem.id = task.index;
  taskItem.setAttribute('draggable', 'true');
  taskItem.classList.add('task');

  tasksContainer.appendChild(taskItem);

  isTaskClicked();
  checkTaskDragEvents();
  isTaskCompleted();
  clearAllCompletedTasksEvent();
};

export default renderTaskItem;