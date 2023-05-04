document.addEventListener('DOMContentLoaded', function() {
    const Task = document.getElementById('task-list');
    const Form = document.getElementById('task-form');
    const clearButton = document.getElementById('clear-completed');

    function addTask(description) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
          <input type="checkbox">
          <span class="task-description">${description}</span>
          <button class="btn btn-danger delete-button">Delete</button>
        `;
        Task.appendChild(taskItem);
      }

      clearButton.addEventListener('click', function() {
        const completedTasks = Task.querySelectorAll('li.completed');
        completedTasks.forEach(function(task) {
          task.remove();
        });
      });
  
    Form.addEventListener('submit', function(a) {
      a.preventDefault();
      const taskDescriptionInput = document.getElementById('task-description');
      const description = taskDescriptionInput.value.trim();
      if (description !== '') {
        addTask(description);
        taskDescriptionInput.value = '';
      }
    });
  
    Task.addEventListener('click', function(e) {
      const target = e.target;
      if (target.classList.contains('delete-button')) {
        target.parentElement.remove();
      } else if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        const taskItem = target.parentElement;
        taskItem.classList.toggle('completed', target.checked);
      } else if (target.classList.contains('task-description')) {
        const newText = prompt('Edit task description:', target.textContent);
        if (newText !== null && newText.trim() !== '') {
          target.textContent = newText.trim();
        }
      }
    });
  
  });
  