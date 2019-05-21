/// ES6 PROMISES

const posts = [{ title: 'Post one', body: 'this is post one' }, { title: 'Post two', body: 'this is post two' }];


function createPost(post) {
    return new Promise(function(resolve, reject){

        setTimeout(function(){
            posts.push(post);

            const error = false;

            if(!error){
                    resolve();
            } else {
                reject('Error: Something went wrong');
            }
            
        }, 2000);

    });

}


function getPosts(){
    setTimeout(function(){
            let output = '';
            posts.forEach(function(post){
                output += `<li>${post.body}</li>`;
            });

            document.body.innerHTML = output;
    }, 1000);
}


createPost({ title: 'Post Three', body: 'This is Post three'})
.then(getPosts)
.catch(function(err){
        console.log(err);
});