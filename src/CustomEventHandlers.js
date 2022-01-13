import Task from './Task.js';
import DataStore from './DataStore';
import { renderTaskItem } from './UserInterface.js'

const checkForEvents = () => {
  const allTasks = document.querySelectorAll('.task');
  const btnClearAllCompleted = document.querySelector('.btn-clear-completed');

  allTasks.forEach(task => {
    let newTaskDescription = ['', ''];
    task.addEventListener('click', () => {
      newTaskDescription[0] = task.childNodes[0].childNodes[2].innerText;
      newTaskDescription.push(parseInt(task.id));
      task.childNodes[0].childNodes[2].contentEditable = true;
      task.childNodes[0].childNodes[2].focus();
      task.childNodes[0].childNodes[2].style.outline = 'none';
      task.style.backgroundColor = 'lightgreen';
      task.childNodes[0].childNodes[2].style.color = 'blue';
      task.childNodes[2].classList.add('d-off');
      task.childNodes[4].classList.remove('d-off');

      const btnDeleteTasks = document.querySelectorAll('.btn-trash');
      btnDeleteTasks.forEach(btnDeleteTask => {
        if (!btnDeleteTask.classList.contains('d-off')) {
          btnDeleteTask.addEventListener('click', () => {
            const task = btnDeleteTask.parentNode;
            let targetTask = new Task();
            targetTask.removeTask(parseInt(task.id))
            task.parentNode?.removeChild(task);
            refreshTaskList();
          });
        }
      });

      allTasks.forEach(inactiveTask => {
        if (task !== inactiveTask) {
          inactiveTask.childNodes[0].childNodes[2].contentEditable = false;
          inactiveTask.style.backgroundColor = '#fff';
          inactiveTask.childNodes[0].childNodes[2].style.color = '#000';
          inactiveTask.childNodes[0].childNodes[2].style.opacity = '0.8';
          inactiveTask.childNodes[0].childNodes[2].style.border = 'none';
          inactiveTask.childNodes[4].classList.add('d-off');
          inactiveTask.childNodes[2].classList.remove('d-off');
        }
      });
    });

    task.childNodes[0].childNodes[2].addEventListener('input', () => {
      newTaskDescription[1] = task.childNodes[0].childNodes[2].innerText;
    })

    task.childNodes[0].childNodes[2].addEventListener('focusout', () => {
      if (newTaskDescription[0] !== newTaskDescription[1] && newTaskDescription[1] !== '') {
        const targetTask = new Task();
        targetTask.editTask(newTaskDescription[1], parseInt(task.id) - 1);
        newTaskDescription.length = 2;
      }

    })
  })

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

  const completedTasksArray = [];
  btnClearAllCompleted.addEventListener('click', () => {
    completedTasks.forEach((btnCheck) => {
      if (btnCheck.checked === true) {
        const targetTaskItem = btnCheck.parentNode.parentNode.parentNode;
        completedTasksArray.push(targetTaskItem);
      }
    });

    completedTasksArray.forEach(item => {
      const targetTask = new Task();
      targetTask.removeTask(parseInt(item.id));
      item.parentNode?.removeChild(item);
    })
  });
}

const refreshTaskList = () => {
  const tasks = document.querySelectorAll('.task');
  tasks?.forEach(prevTask => {
    prevTask.parentNode.removeChild(prevTask);
  });

  DataStore.tasks = DataStore.updateTaskIndex();
  DataStore.tasks.forEach(task => {
    renderTaskItem(task);
  })

  checkForEvents();
}

export { checkForEvents, refreshTaskList };