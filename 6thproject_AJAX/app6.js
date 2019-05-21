document.getElementById('button').addEventListener('click', loadData);


function loadData() {
    //// Create an XHR object

  

    const xhr = new XMLHttpRequest();



    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200) {
               document.querySelector('#output').innerHTML = `<h1> ${this.responseText}`;
                console.log((this.responseText));
                
        }
    }

    xhr.send();

    /// if there is an error
    xhr.onerror = function() {
        console.log('Request error....');
    }




    //// ReadyState Values
    /// 0: requet not initialized
    /// 1: server connection established
    /// 2: request received
    /// 3: processing request
    /// 4: Request finished and response is ready


}

document.body.addEventListener('DOMContentLoaded', loadData());

//// HTTP STATUS ----
/// 200: "OK"
/// 403: "FORBIDDEN"
/// 404: "NOT FOUND"