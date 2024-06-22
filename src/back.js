document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'getTask.php', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var tasks = JSON.parse(xhr.responseText);
        var tasksUl = document.getElementById('tasks');
        tasks.forEach(function(task) {
          var li = document.createElement('li');
          li.innerHTML = `<span>${task.Tid}</span> <span>${task.Title}</span> <span>${task.Description}</span>  ${task.DueDate}&nbsp&nbsp    <button onclick="editTask(${task.Tid})">Edit</button>  <button onclick="deleteTask(${task.Tid})">Delete</button>`;
          tasksUl.appendChild(li);
        });
      } else {
        console.error('Error fetching tasks:', xhr.statusText);
      }
    };
    xhr.send();
  });
  
  function editTask(taskId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'getTask.php?id=' + taskId, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var task = JSON.parse(xhr.responseText);
        var titleInput = prompt("Enter new title:", task.Title);
        var descriptionInput = prompt("Enter new description:", task.Description);
        var dueDateInput = prompt("Enter new due date:", task.DueDate);
        
        if (titleInput && descriptionInput && dueDateInput) {
          var xhrUpdate = new XMLHttpRequest();
          xhrUpdate.open('POST', 'updateTask.php', true);
          xhrUpdate.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhrUpdate.onload = function() {
            if (xhrUpdate.status === 200) {
              console.log('Task updated successfully!');
              location.reload(); // reload the page to show the updated task
            } else {
              console.error('Error updating task:', xhrUpdate.statusText);
            }
          };
          xhrUpdate.send('id=' + taskId + '&title=' + titleInput + '&description=' + descriptionInput + '&dueDate=' + dueDateInput);
        }
      } else {
        console.error('Error fetching task:', xhr.statusText);
      }
    };
    xhr.send();
  }
  
  function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
      var xhrDelete = new XMLHttpRequest();
      xhrDelete.open('POST', 'deleteTask.php', true);
      xhrDelete.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhrDelete.onload = function() {
        if (xhrDelete.status === 200) {
          console.log('Task deleted successfully!');
           location.reload(); // reload the page to show the updated task list */
        } else {
          console.error('Error deleting task:', xhrDelete.statusText);
        }
      };
      xhrDelete.send('id=' +id );
    }
  }