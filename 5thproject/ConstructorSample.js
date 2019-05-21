//// Book Constructor

function Book (title, author, isbn) {

    this.title = title;
    this.author = author;
    this.isbn = isbn;
  
}

   
//// UI constrcutor
function UI () {}


//// Add book to List
UI.prototype.addBookToList = function(book) {

    const list = document.getElementById('book-list');

    //// Create tr element
    const row = document.createElement('tr');

    //// Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</td>
    
    `;

    list.appendChild(row);

}


//// show alert
UI.prototype.showAlert = function (message, className) {
        //// Create Div
        const div = document.createElement('div');

        /// Add Classes
        div.className = `alert ${className}`;

        /// Add text
        div.appendChild(document.createTextNode(message));
        
        //Get parent
        const container = document.querySelector('.container');

        // Get form
        const form = document.querySelector('#book-form');

        // Insert Alert
        container.insertBefore(div, form);

        // Timeout after 3 sec
        setTimeout(function() {

            document.querySelector('.alert').remove();
        }, 3000);

}


//// Delete Book
UI.prototype.deleteBook = function (target) {
    if(target.className === 'delete') {
       target.parentElement.parentElement.remove();
    }

}



///// clear fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


/// event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){

    //// Get Form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;


    //// Instantiate book
    const book = new Book(title, author, isbn);

    //// Instantiate UI
    const ui = new UI();


    //// Validate
    if(title === '' || author === '' || isbn === ''){
        //// error Alert
        ui.showAlert('Please fill in all fields', 'error');

    }else {
        ui.showAlert('Book Added', 'success');
          //// add book to list
        ui.addBookToList(book);

        ui.clearFields();
            

        e.preventDefault();
    }


    

   

}); 


//// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function(e){

    //// Instantiate
    const ui = new UI();

    //// Delete Book
    ui.deleteBook(e.target);

    //// show message
    ui.showAlert('Book Remove', 'success');

    e.preventDefault();

});