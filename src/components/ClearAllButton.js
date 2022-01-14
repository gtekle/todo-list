const btnClearAllCompleted = () => {
  const btnClearCompleted = document.createElement('button');
  btnClearCompleted.setAttribute('type', 'button');
  btnClearCompleted.setAttribute('name', 'btnClearCompleted');
  btnClearCompleted.innerText = 'Clear all completed';
  btnClearCompleted.classList.add('btn', 'btn-clear-completed');

  return btnClearCompleted;
};

export default btnClearAllCompleted;