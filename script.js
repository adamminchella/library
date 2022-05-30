const tableBody = document.querySelector(".table-body");
const addBookButton = document.querySelector(".add-book");
const form = document.querySelector(".form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const numberOfPages = document.getElementById("number-of-pages");
const hasBeenRead = document.getElementById("read");
const sumbitButton = document.querySelector(".submit");

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

function addBookToLibrary() {
  let newBook = new Book(
    title.value,
    author.value,
    numberOfPages.value,
    hasBeenRead.checked
  );
  myLibrary.push(newBook);
  return newBook;
}

function displayNewBook(book) {
  const tableRow = document.createElement("tr");
  for (let key in book) {
    const tableCell = document.createElement("td");
    if (key == "read") {
      if (hasBeenRead.checked) {
        tableCell.textContent = "Yes";
      } else {
        tableCell.textContent = "No";
      }
    } else {
      tableCell.textContent = book[key];
    }
    tableRow.appendChild(tableCell);
  }
  addRemoveButton(tableRow);
  tableBody.appendChild(tableRow);
}

function addRemoveButton(tableRow) {
  const newTD = document.createElement("td");
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  newTD.appendChild(removeButton);
  tableRow.appendChild(newTD);
}

addBookButton.addEventListener("click", displayForm);

sumbitButton.addEventListener("click", () => {
  const newBook = addBookToLibrary();
  displayNewBook(newBook);
  resetForm();
  console.log(myLibrary);
});

function displayForm() {
  form.style.display = "initial";
}

function resetForm() {
  //   title.value = "";
  //   author.value = "";
  //   numberOfPages.value = "";
  //   hasBeenRead.checked = false;
  form.style.display = "none";
}
