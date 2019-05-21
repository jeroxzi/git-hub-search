// // var, let const

// var name = 'Jerox viduya';

// name = 'viduya';

// console.log(name);  

// // init var

// var greeting;
// console.log(greeting)

// greeting = 'hello';


// console.log(greeting)


//---------------------------------------------------------------------------------
// //letter, number, _, $
// // can not start with number

// //multi word vars

// var firstName = 'John';  //camel case
// var first_name = 'Sara'; //underscore
// var FirstName = 'Tom'; //Fascal Case

// //--------------------------------------------------------------------------------
// //LET
// let name;
// name = 'jerox vid';
// console.log(name);
// name = 'smith';
// console.log(name);

// ---------------------------------------------------------------------------------
// CONST
// const name ='John';
// console.log(name);
// Cannot Reasign
// name = 'sara';

// const person = {
//     name: 'jerox',
//     age: '36'

// }

// person.name = 'sara';
// console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6)

// console.log(numbers);



// let val;
// // Number to string

// val = String(555);
// val = String(5+5);


// val = new Date();


// val = Number('5');
// val = Number(true);

// val = Number(null);
// val = Number([1,2,3]);

// // val = parseInt('100.90');
// val = parseFloat('100.90');
// // console.log(val);

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);


//output
// console.log(typeof val);

//  const firstName1 = 'Willium';
//  const lastName1 = 'Johnson';
//  const age = 36;
//  const str = 'Hello there my name is Jerox';
//  const tags = 'Web design, web';

//  let val;
//  val = firstName1 + lastName1;

//  //Concatenation
//  val = firstName1 + "  " + lastName1;


// // Append
// val = 'bobby ';
// val += 'Ferrer';

// val = 'heloo, my name is ' + firstName1 + ' and I am ' + age;

// val = `hello, my name is ${firstName1} and I am ${age}`;

// val = firstName1.concat(' ', lastName1);

// //change to uppercase
// val = firstName1.toUpperCase();
// val = firstName1.toLowerCase();


// // split
// val = str.split(' ');

// val = tags.split(',');


// // console.log(val);


// const name1 = 'John';
// const age1 = 38;
// const Job1 = 'web dev';
// const city1 = 'Manila';
// let html;

// // without template string (es5)

// html = '<ul><li>Name: ' + name1 +  
//         '</li><li>Age: ' + age + 
//         '</li>' + '</ul>';


//         document.body.innerHTML = html;


// // with template string (es6)

// html = `<ul>
//             <li>Name: ${name}</li>
//             <li>Age: ${age1}</li>
//             <li>Job: ${Job1}</li>
//             <li>City: ${city1}</li>
//             <li>${age1 > 30 ? `${city1}` : "Under 30"}


//         </ul>`;


//         document.body.innerHTML = html;



// ////----------------------------------------------------------------------------------------
// const person = {
//     firstName: 'steve',
//     lastName: 'Smith',
//     age: 36,
//     email: 'jeroxzi16@gmail.com',
//     Hobbies: ['music', 'Sport'],
//     address: {
//         city: 'Manila',
//         state: 'Phil'
//     },

//     getBirthYear: function() {
//         return 2019 - this.age;
//     }
    

// };

// let val; 

// val = person.getBirthYear();
// val = person.address['city'];

// // console.log(val);

// const people = [ {name: 'John', age: 30}, {name: 'mike', age: 30},{name: 'Nancy', age: 25}];

// for(let i = 0; i < people.length; i++) {

//     console.log(people[i].name);

// }


// const id = '100';


// if(id !== 100){
//         console.log('Correct');

// }else{
//     console.log('false');
// }

 
//TYPE OF FUNCTION ------------------------------------------------------------------------------------

// // FUNCTION DECLRATION

// function greet(firstName = 'John', lastNmae = 'Doe'){
//     if(typeof firstName === 'undefined') {
//         firstName ='John';
//     }
//     if(typeof lastName === 'undefined') {
//         lastName ='Doe';
//     }
//      return 'Hello' + firstName + ' ' + lastName;
// }

// console.log(greet());


// // FUNCTION EXPRESSIONS
// const square = function(x = 3){
//     return x * x;
// }

// console.log(square());

// //IMMIDIATELY INVOKE FUNCTION EXPRESSIONS - IIFE'S
// (function(){
//     console.log('IIFE run..');
// })();



// //PROPERTY METHODS
// const todo = {
//     add: function(){
//         console.log('add to do...');
//     },
//     edit: function(id){
//         console.log(`Edit to ${id}`);

//     }
    
// }


// todo.delete = function(){
//     console.log('Delete todo....');
// }


// todo.add();
// todo.edit(22);
// todo.delete();

////FOR LOOP-----------------------------
// for(let i = 0; i < 10; i++){
//         if(i === 2) {
//               console.log('2 is my favorite num');  
//         }
//         if(i === 5) {
//               console.log('stop the loop');  
//               break;

//         }
        
//         console.log(`number ${i}`);

// }


// ///WHILE LOOP------------------------------

// let i = 0;

// while(i < 10) {
//         console.log('Number' + i);
//         i++
// }


// /// DO WHILE LOOP  ---------------------------
// let i = 0;
// do{
//     console.log('Number' + i);
//     i++;
// }

// while(i < 20);


/// LOOP THROUGH ARRAY -----------------------

// const cars = ['Ford', 'chevy', 'Honda', 'toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }


// /// FOR EACH LOOP ----------------------

// const cars = ['Ford', 'chevy', 'Honda', 'toyota'];

// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });


//// MAP

// const users = [{id: 1, name: 'John'}, {id: 2, name: 'jer'}, {id: 3, name: 'viduya'}, {id: 4, name: 'Dan'}];

// const ids = users.map(function(user){
//         return `${user.name}, ${user.id}`;
        
// });

// console.log(ids);


/// FOR IN LOOP

const user = { 
    firstName: 'John',
    lastName: 'Doe',
    age: 36
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}s