////CALLBACK FUNCTION

const posts = [{title: 'Post one', body: 'this is post one'},{title: 'Post Two', body: 'this is post two'}];

// function createPost(post) {
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPost() {
//     setTimeout(function(){
//         let output= '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });

//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'post four', body: 'this is post four'});

// getPost();


///-----------------------------------------------------------------------------------------

function createPost(post, callback) {
    setTimeout(function(){
        posts.push(post)
        callback();
    }, 2000);
}



function getPost() {
    setTimeout(function(){
        let output= '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}



createPost({title: 'post four', body: 'this is post four'},getPost);