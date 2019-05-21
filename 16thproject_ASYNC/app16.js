// ////// ASYNC

// async function myFunction() {
//     return 'Hello';
// }


// console.log(myFunction());


////// OTHER EXAMPLE --------------------------------------------

// async function myFunction() {
//     return 'Hello';
// }


// myFunction().then(res => console.log(res));

////other example ---------------------------------------------

// async function myFunction() {

//     const promise = new Promise((resolved, reject) => {
//         setTimeout(() => resolved('Hello'), 2000);
//     });


//     const error = false;
//     if(!error) {
//         const res = await promise;  /// Wait until promise is resolve
//         return res;
//     }else {
//         await Promise.call.reject(new Error('Somthing went wrong'));
//     }
// }



// myFunction()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));



///////////// ------------------------------------------------------------------
async function getUsers() {
    //// await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    return data;

}


getUsers()
    .then(users => console.log(users))
    .then(err => console.log(err));