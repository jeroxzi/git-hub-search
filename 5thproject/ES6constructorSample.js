class Book {


    constructor(title, author, isbn) {

        this.title = title;
        this.author = author;
        this.isbn = isbn;
      
    }

}


class UI {
    addBookToList(book) {
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

    showAlert (message, className) {
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



    deleteBook (target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
         }
    }


    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

}



class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
     const books = Store.getBooks();

        books.forEach(function(book){
            const ui = new UI;

             //Add book to ui
            ui.addBookToList(book);

         });
     }

    

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {

        const books = Store.getBooks();

        books.forEach(function(book, index) {

            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
         });

            localStorage.setItem('books', JSON.stringify(books));
    }

}


console.log(Store.getBooks());

document.getElementById('book-list').addEventListener('click', function(e){

    //// Instantiate
    const ui = new UI();

    //// Delete Book
    ui.deleteBook(e.target);

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //// show message
    ui.showAlert('Book Remove', 'success');

    

    e.preventDefault();

});

document.addEventListener('DOMContentLoaded', Store.displayBooks());



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
            
        //// Add to Local storage
        Store.addBook(book);



        e.preventDefault();
    }
});


// document.addEventListener("DOMContentLoaded", function(e) {
//     Store.displayBooks();
// });