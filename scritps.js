const myLibrary = [];
const cardMainContainer = document.querySelector("#card_main_container");
const bookForm = document.querySelector("form");
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');

// ADD BOOK BUTTON
document.querySelector('#add_btn').addEventListener("click", () => {
    bookForm.style.zIndex = 0;
});

// FORM BUTTON
document.querySelector('#form_btn').addEventListener('click', () => {
    const readValueElement = document.querySelector('input[name="isRead"]:checked');
    const readValueString = readValueElement ? readValueElement.value : "false"; // Default to "false" if none checked
    const readBoolean = readValueString === "true"; // Convert string to boolean
   const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, readBoolean);
   addNewBook(newBook);
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = ''; 
    bookForm.style.zIndex = -1;

    renderNewBook(newBook);
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

function addNewBook(book) {
    book.id = crypto.randomUUID();
    return myLibrary.push(book);
}

function renderNewBook(book) {
        const article = document.createElement('article');
        article.innerHTML = `
        <h1>Title: ${book.title}</h1>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Have you read it? ${book.read === true ? "Yes" : "No"}</p>
        `;
        cardMainContainer.appendChild(article);
}

