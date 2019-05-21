class EasyHTTP {
    //// Make and HTTP GET request
    // get(url) {
    //     return new Promise((resolve, reject) => {
    //             fetch(url)
    //             .then( res => res.json())
    //             .then( data => resolve(data))
    //             .catch(err => reject(err)); 
    //     });
    // }

    ///// other method to write code aboove ---------------

    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }


    // //// Make an HTTP POST Request ------------
    // post(url, data) {
    //     return new Promise((resolve, reject) => {
    //             fetch(url, {
    //                 method: 'POST',
    //                 headers: {
    //                         'Content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(data)
    //             })
    //             .then(res => res.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err));
    //     });

    // }
    ///// other method to write code aboove ---------------
    //// Make an HTTP POST Request ------------
    async post(url, data) {
       const response = await fetch(url, {
        method: 'POST',
                    headers: {
                            'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
         const resData = await response.json();
         return resData;
        }

    };



    // delete(url, data){
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'DELETE',
    //             headers: {
    //                     'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(res => res.json())
    //         .then(data => resolve(data))
    //         .catch(err => reject(err));
    // });

    // }



    // PUT(url, data) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                     'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(res => res.json())
    //         .then(data => resolve(data))
    //         .catch(err => reject(console.log(err)))
    // });

    // }

