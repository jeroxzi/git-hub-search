document.querySelector('form').addEventListener('submit', function(e) {

    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null) { 
        tasks = [];
   
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task saved');

    // e.preventDefault();

});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
        console.log(task);
        
});



// // Create element ---------------------------------------------------------------------------------------
// const li = document.createElement('li');

// // add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello world'));

// // create new link element
// const link = document.createElement('a');

// // Add classes
// link.className = 'delete-item secondary-content';

// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

