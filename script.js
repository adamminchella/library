let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = isRead;
  this.info = function () {
    let text = this.read ? "has been read" : "has not been read";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${text}`;
  };
}

function addBookToLibrary(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}
