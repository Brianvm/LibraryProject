const myLibrary = [];
const cardMainContainer = document.querySelector("#card_main_container");
const bookForm = document.querySelector("form");
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const readValue = document.querySelector('input[name="isRead"]:checked');

// ADD BOOK BUTTON
document.querySelector('#add_btn').addEventListener("click", () => {
    console.log('Button clicked!')
    bookForm.style.visibility = "visible";
    bookTitle.value = '';
    bookAuthor.value = ''; 
    bookPages.value = ''; 
    readValue.value = '';
});

// FORM BUTTON
document.querySelector('#form_btn').addEventListener('click', () => {
    addNewBook(bookTitle.value, bookAuthor.value, bookPages.value, readValue.value);
    bookTitle.value = '';
    bookAuthor.value = ''; 
    bookPages.value = ''; 
    readValue.value = '';
    bookForm.style.visibility = "hidden";

    myLibrary.forEach(book => {
        cardMainContainer.innerHTML += `
        <article>
            <h1>Title: ${book.title}</h1>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Have you read it? ${book.read}</p>
        </article>`
    });
});


// BOOK CONSTRUCTOR
function Book(title, author, pages, read) {
    if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor.");
    }
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      const isRead = this.read ? "already read." : "not read yet."
      return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead}`
    };
  }

function addNewBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    newBook.id = crypto.randomUUID();
    console.log(myLibrary);
    return myLibrary.push(newBook);
}


