const myLibrary = [];
const cardMainContainer = document.querySelector("#card_main_container");
const bookForm = document.querySelector("form");
document.querySelector('#add_btn').addEventListener("click", () => {
    bookForm.style.visibility = "visible";
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
    return myLibrary.push(newBook);
}

addNewBook("The Hobbit", "Tolkein", 1000, true);
console.log(myLibrary);

