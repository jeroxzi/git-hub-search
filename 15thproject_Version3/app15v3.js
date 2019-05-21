const http = new EasyHTTP;

///// Get users --------------------------
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));



/////// USER DATA POST Method --------------------------
// const data = {
//     name: 'John Doe',
//     username: 'johndoe',
//     email: 'jdoe@gmail.com'
// }

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));





/////// USER DATA DELETE Method -----------------------

// const data = {
//     name: 'John Doe',
//     username: 'johndoe',
//     email: 'jdoe@gmail.com'
// }

// http.delete('https://jsonplaceholder.typicode.com/users/1', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));



/////// USER DATA PUT Method -----------------------
// const data = {
//     name: 'John Doe',
//     username: 'johndoe',
//     email: 'jdoe@gmail.com'
// }

// http.PUT('https://jsonplaceholder.typicode.com/users/1', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));