// //// Person Contructor example
// function Person(name, age){
//     this.name = name;
//     this.age = age;
    
// }
// console.log(this.alert('test'));

// const bob = new Person('bob', 26);
// // const John = new Person('john');


// console.log(bob);


/////------------------------------------------------------------------------

// //// CONTRUCTOR AND THIS. KEYWORD
// //// Person constructor

// function Person(name, dob) {
//     this.name = name;
//     this.birthday = new Date(dob);
//     this.calculateAge = function() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);

//         return Math.abs(ageDate.getUTCFullYear() - 1970);

//     }
// }


// const bob = new Person('bob', "9-16-1993");
// console.log(bob.calculateAge());


////-----------------------------------------------------------------------


const name1 = 'jeff';
const name2 = new String('jeff');


// console.log(name2);

name2.foo = 'bar';

console.log(name2);

if(name2 === 'Jeff') {
    console.log('Yes');
} else {
    console.log('No');
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num2);

const bool1 = true;
const bool2 = new Boolean(true);



const getSum1 = function(x,y) {
    return x + y;

}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

console.log(getSum2());

///// OBbject
const john1 = {name: 'John'};
const john2 = new Object ({name: 'John'});

console.log(john2);

///// Arrays
const arr1 = [1,2,33,44];
const arr2 = new Array(1,2,33,44);

console.log(arr2);
