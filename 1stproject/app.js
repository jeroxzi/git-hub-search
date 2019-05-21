////////////// DOM --------------------------------------------------------
// let val;

// val= document;
// val= document.all;
// val= document.all[2];
// val= document.all.length;
// val= document.head;
// val= document.body;
// val= document.doctype;
// val= document.domain;
// val= document.URL;
// val= document.characterset;
// val= document.contentType;
// val= document.forms;
// val= document.forms[0];
// val= document.forms[0].id;
// val= document.forms[0].method;
// val= document.forms[0].action;

// val=document.links;
// val=document.links[0];
// val=document.links[0].id;
// val=document.links[0].className;
// val=document.links[0].classList;


// val = document.images;
// val = document.scripts[0];
// val = document.scripts[0].getAttribute('src');


// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
//             console.log(script.getAttribute('src'));
// });


/////// GET THINGS -----------------

// console.log(document.getElementById('task-title'));

// /////// GET THINGS FROM ELEMENT ------------
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);


// const taskTitle = document.getElementById('task-title');


// //////// CHANGE STYLING -------------- 
// taskTitle.style.background = 'red';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// taskTitle.style.fontSize = '4rem';

// // taskTitle.style.display = 'none';


// ////// CHANGE CONTENT ------------- 

// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'wow';
// taskTitle.innerHTML = '<span style="color: blue"> Task List ......</span>';


// document.querySelector('li').style.color = 'red' ;
// document.querySelector('ul li').style.color = 'green' ;
// document.querySelector('li:last-child').style.color = 'red' ;
// document.querySelector('li:nth-child(3)').style.color = 'yellow' ;
// document.querySelector('li:nth-child(odd)').style.background = 'red' ;
// document.querySelector('li:nth-child(even)').style.background = 'pink' ;


// //// document.getElementByClassName ----------------------------------------------------

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[2]);
// items[2].style.color = 'blue';
// items[2].textContent = 'Test Item';


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);


// //// document.getElementByTagName -------------------------------------------------

// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);

// lis[0].style.color ='red';
// lis[0].textContent ='red';

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index) {
//     console.log(li.className);
//     li.textContent = `${index}: Hey`
// });


// /////  document.querySelectorALL
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function (item, index) {
//     item.textContent = `${index}: hello`
// });


////---------------------------------------------------------

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background  = 'red';
// });

// liEven.forEach(function(li, index){
//     li.style.background  = 'green';
// });


// /////------------------------------------------------

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get Child nodes
// val =  list.childNodes;
// val =  list.childNodes[1];
// val =  list.childNodes[1].nodeName;
// val =  list.childNodes[2].nodeType;

// // console.log(val);
 
// // get Children element nodes
// val = list.children;
// val = list.children[1];
// val = list.children[1].textContent = 'hello';

// //children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// // First Child
// val = list.firstChild;
// val = list.firstElementChild;

// // last Child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child element
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling; 
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; 


// console.log(val);

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


// //////// REPLACE ELEMENT -----------------------------------------

// // Create element
// const newHeading = document.createElement('h2');

// // Add id
// newHeading.id = 'task-title';

// newHeading.appendChild(document.createTextNode('task-List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');

// // Parent
// const cardAction = document.querySelector('.card-action');

// // REPLACE
// cardAction.replaceChild(newHeading, oldHeading);

// // Remove element --
// const lis = document.querySelector('li');
// const list = document.querySelector('ul');

// // Remove list item --

// lis.remove();
// // lis[0].remove();

// // Remove child element
// list.removeChild(list.childNodes[2]);

// // CLASSES & ATTR --
// const fristLi = document.querySelector('li:first-child');
// const link = fristLi.children[0];

// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');

// val = link;

// // attribute ---
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;


// console.log(val);

// console.log(cardAction);


// //// Event listener  ----------------------

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
    
//     console.log('hello world');
//     e.preventDefault();

// });


// /////--------------------------------------------------------
// document.querySelector('.clear-tasks').addEventListener('click', onclick);

// function onclick(e){

//     let val;

//     //Event target element
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     //Event type
//     val = e.type;

//     //Event timestamp
//     val = e.timeStamp;

    
//     // Coord event relative to the window
//     val = e.clientY;
//     val = e.clientX;

//     // Coords event relative to the element
//     val = e.offsetY;
//     val = e.offsetX;

//     e.preventDefault();
//     console.log(val);
// }



// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // //Click--
// // clearBtn.addEventListener('click', runEvent);
// // clearBtn.addEventListener('dbClick', runEvent);
// // clearBtn.addEventListener('mousedown', runEvent);
// // clearBtn.addEventListener('mouseup', runEvent);
// // clearBtn.addEventListener('mouseenter', runEvent);
// // clearBtn.addEventListener('mouseleave', runEvent);
// // clearBtn.addEventListener('mouseover', runEvent);
// // clearBtn.addEventListener('mouseout', runEvent);
// // clearBtn.addEventListener('mousemove', runEvent);
// card.addEventListener('mousemove', runEvent);


// function runEvent(e) {

   
//     console.log(`Event Type: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} Mouse: ${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
//     e.preventDefault();

// }


//--------------------------------------------------------------------
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// // clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);


// // taskInput.addEventListener('keydown', runEvent);
// // taskInput.addEventListener('keyup', runEvent);
// // taskInput.addEventListener('keypress', runEvent);
// // taskInput.addEventListener('blur', runEvent);
// // taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);


// taskInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent);

// function runEvent(e) {

//     console.log(`EVENT TYPE: ${e.type}`);

//     console.log(e.target.value);

//     heading.innerHTML = e.target.value;

//     // GEt input value

//     console.log(taskInput.value);

//     // e.preventDefault();
// }


// // EVENT BUBBLING ----------------------------------------------

// document.querySelector('.card-title').addEventListener('click', function(){
//         console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });


// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// // -------------
// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//     if(e.target.parentElement.classList.contains('delete-item')) {
   
//         // console.log('delete item');
//         e.target.parentElement.parentElement.remove();

//         e.preventDefault();
//     }
// }


// //// Set Local storage item --------------------
// localStorage.setItem('name', 'john');
// localStorage.setItem('age', '36');
// localStorage.setItem('num', '09222');


// /// set session storage item ------------------
// sessionStorage.setItem('name', 'beth');

// /// remove from local storage ------------
// localStorage.removeItem('name');


// /// get from storage ------------
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');


// // /// clear local storage ---------------
// localStorage.clear();


// console.log(name, age);

// AddtoArrayandlocaldb------------------------------------------------------------------------------
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

    e.preventDefault();

});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
        console.log(task);
});

    