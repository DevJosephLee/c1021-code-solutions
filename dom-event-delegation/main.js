var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function removeTaskList() {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    event.target.closest('.task-list-item').remove();
  }
});
