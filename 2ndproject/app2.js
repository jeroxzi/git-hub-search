//   Define UI Vars  -1 --------------------------

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    

    document.addEventListener('DOMContentLoaded', getTasks);

// Add task event
    form.addEventListener('submit', addTask);

    // Remove task event
    taskList.addEventListener('click', removeTask);

    // clear task event
    clearBtn.addEventListener('click', clearTasks);

    filter.addEventListener('keyup', filterTask);
}

        // Get Tasks from LS ---5--------------------------
            function getTasks(){
                let tasks;
                if(localStorage.getItem('tasks' === null)) {
                    tasks = [];
                } else {
                    tasks = JSON.parse(localStorage.getItem('tasks'));


                    tasks.forEach(function(task){
                        const li = document.createElement('li');

                        // add class
                        li.className = 'collection-item';
                        
                        // Create text node and append
                        li.appendChild(document.createTextNode(task));
                        
                        // create new link element
                        const link = document.createElement('a');
                        
                        // Add classes
                        link.className = 'delete-item secondary-content';
                        
                        // Add icon html
                        link.innerHTML = '<i class="fa fa-remove"></i>';
                        
                        // Append link into li
                        li.appendChild(link);
                        
                        
                        // Append li to ul
                        taskList.appendChild(li);
                    })

                }
            }





// Add task

function addTask(e){
    if(taskInput.value === ''){
     
        alert('Add a Task');
    }
    else{
        
    }
            // Create element --2 ---------------------------------------------------------------------------------------
const li = document.createElement('li');

// add class
li.className = 'collection-item';

// Create text node and append
li.appendChild(document.createTextNode(taskInput.value));

// create new link element
const link = document.createElement('a');

// Add classes
link.className = 'delete-item secondary-content';

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);


// Append li to ul
taskList.appendChild(li);

        //store in LS  ----4------------------------------
        storeTaskInLocalStorage(taskInput.value);


// clear input
taskInput.value = '';

e.preventDefault();

}

            //Store Task
                function storeTaskInLocalStorage(task) {
                    let tasks;

                    if(localStorage.getItem('tasks') === null) {
                        tasks = [];
                    } else {
                        tasks = JSON.parse(localStorage.getItem('tasks'));
                    }

                    tasks.push(task);

                    localStorage.setItem('tasks', JSON.stringify(tasks));

                }




/// remove Task  --3----------------------------------------------------------------------
function removeTask(e) {

    if(e.target.parentElement.classList.contains('delete-item')) {
            if(confirm('Are you Sure!')){
                e.target.parentElement.parentElement.remove();
                removeTaskFromLocalStorage(e.target.parentElement.parentElement);
            }
    }

}


function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });


localStorage.setItem('tasks', JSON.stringify(tasks));


}


function clearTasks() {
        ////clear task all ----
        // taskList.innerHTML = '';

        /// other method to clear ----------
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        clearTasksFromLocalStorage();

}


//// clear tasks from LS
function clearTasksFromLocalStorage() {
    localStorage.clear();
}



//// filter task
function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

}