/////// ARROW  FUNCTION EXAMPLE


// const sayHeloo = function() {
//     console.log('hello');
// }

// const sayHello = () => {
//     console.log('hello');
// }

// sayHello();


///// One line function does not need braces -------------------------------------------------------------

// const sayHello = () => console.log('no braces');

// sayHello();


////// One line returns -------------------------------------------------------------------------------

// const sayHello = () => 'hello';

// console.log(sayHello());

//////  same as above---------------------------------------------------

// const sayHello = function() {
//     return 'hello';
// }

// console.log(sayHello());



////// Return object -----------------------------------------
// const sayHello = () => ({msg: 'hello'});
// console.log(sayHello());



///// Single Param does not need parenthesis ----------------------------------
// const sayHello = name => console.log(`hello ${name}`);
// sayHello('bob');


////// multiple param need a parenthesis ------------------------------------
// const sayHello = (name,age) => console.log(`hello ${name} ${age}`);

// sayHello('bob', 36);



///// Map (high order method)----------------------------------------------------------
// const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map((name) => {
//         return name.length;

// });
// console.log(nameLengths);


/////// short version of sample above -------------------------------------

// const users = ['Nathan', 'John', 'William'];
// const nameLengths = users.map(name => name.length);
// console.log(nameLengths);