
let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const container = document.querySelector(".container");
function addBookToLibrary(book) {
    myLibrary.push(book);
}
for(i = 0; i < myLibrary.length; i++){
    let newCard = document.createElement("div");
    newCard.textContent = myLibrary[i].name + " " + myLibrary[i].author + " " +myLibrary[i].pages + " " + myLibrary[i].read
    newCard.appendChild(container);
}
