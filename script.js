document.addEventListener('DOMContentLoaded',function () {
    console.log("I am here!");

    document.getElementById('add-task').addEventListener('click', function(element, event) {
        console.log(element);
        console.log(event);
        var taskValue = document.getElementById('new-task').value;

        console.log("TASK VALUE", taskValue);

        if (taskValue) {
            addTask(taskValue);
        }
        
    });

    function addTask(taskValue) {
        var li = document.createElement('li');
        li.textContent = taskValue;

        // Create delete button
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete"
        deleteButton.onclick = function() {
            li.parentNode.removeChild(li);
        }
        li.appendChild(deleteButton);

        // Create edit button
        var editButton = document.createElement('button');
        editButton.textContent = "Edit"
        editButton.onclick = function() {
            editTask(li, taskValue);
        }
        li.appendChild(editButton);

        // Complete task
        li.addEventListener('click', function () {
            completeTask(li);
        });

        // Add new task to list
        document.getElementById('task-list').appendChild(li);
    }

    function completeTask(li) {
        li.classList.toggle('completed')
    }

    function editTask(li, taskValue) {
        var editDiv = document.createElement("div");
        editDiv.setAttribute("id", "edit-task");
        var editInput = document.createElement('input');
        editInput.value = taskValue;
        editDiv.appendChild(editInput);
        li.appendChild(editDiv);
    }
    
});