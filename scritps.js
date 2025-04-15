const myLibrary = [];
const cardMainContainer = document.querySelector("#card_main_container");
const bookForm = document.querySelector("form");
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');

// ADD BOOK BUTTON
document.querySelector('#add_btn').addEventListener("click", () => {
    bookForm.style.visibility = "visible";
    cardMainContainer.style.visibility = "hidden";
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
    bookForm.style.visibility = "hidden";
    cardMainContainer.style.visibility = "visible";

    renderNewBook(newBook);
});

// DELETE BTN
document.querySelector(".del_btn").addEventListener('click', () => {
    cardMainContainer.removeChild()
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
    this.id = crypto.randomUUID();
    this.info = function() {
        const isRead = this.read ? "already read." : "not read yet."
        return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead}`
    };
}

function addNewBook(book) {
    return myLibrary.push(book);
}

function renderNewBook(book) {
        const article = document.createElement('article');
        article.setAttribute('data-id', book.id);
        article.innerHTML = `
        <p><span class="bold">Title:</span> ${book.title}</p>
        <p><span class="bold">Author:</span> ${book.author}</p>
        <p><span class="bold">Pages:</span> ${book.pages}</p>
        <p><span class="bold">Have you read it?</span> ${book.read === true ? "Yes" : "No"}</p>
        <button class="del_btn">Delete</button>
        `;
        cardMainContainer.appendChild(article);
}

