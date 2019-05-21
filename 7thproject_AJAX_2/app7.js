document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomer2);

///// Load Single Customer

function loadCustomer(e){
    const xhr = new XMLHttpRequest;

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);

            const customer = JSON.parse(this.responseText); 

            

            const output = `
                <ul>
                    <li>ID: ${customer[0].id}</li>
                    <li>Name: ${customer[1].name}</li>
                    <li>Company: ${customer[2].company}</li>
                    <li>Phone: ${customer[3].phone}</li>

                </ul>
            `;

            document.getElementById('customer').innerHTML = output;

        }
    }

    xhr.send();

}





function loadCustomer2(){
    const xhr = new XMLHttpRequest;

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);

            const customer = JSON.parse(this.responseText); 

            let customerList = [];

            customer.forEach(function(customer){
 
                customerList += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>

                </ul>
            `;


            })

         
            document.getElementById('customer').innerHTML = customerList;

        }
    }

    xhr.send();

}

