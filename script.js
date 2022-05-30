const tableBody = document.querySelector(".table-body");

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = isRead;
  //   this.info = function () {
  //     let text = this.read ? "has been read" : "has not been read";
  //     return `${this.title} by ${this.author}, ${this.pages} pages, ${text}`;
  //   };
}

function addBookToLibrary(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

addBookToLibrary("Harry Potter", "J.K. Rowling", 624, true);

function displayLibrary() {
  for (let book of myLibrary) {
    const tableRow = document.createElement("tr");
    for (let key in book) {
      const tableCell = document.createElement("td");
      tableCell.textContent = book[key];
      tableRow.appendChild(tableCell);
    }
    tableBody.appendChild(tableRow);
  }
}

displayLibrary();
