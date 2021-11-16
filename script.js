
let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
let harryPotter = new Book("harryPotter", "jk", 300, "nope");
let theguy = new Book("theguy", "luna", 300, "yes");

const container = document.querySelector(".container");

function addBookToLibrary(book) {
    myLibrary.push(book);
}
console.log(myLibrary);
addBookToLibrary(harryPotter);
console.log(myLibrary);
addBookToLibrary(theguy);
console.log(myLibrary);
/*
let addBtn = document.querySelector(".addBtn");
addBtn.addEventListener('click', function(){
    let form = document.createElement("div");
    form.classList.add("form");

    
}
) 
*/
for(i = 0; i < myLibrary.length; i++){
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.textContent = myLibrary[i].name + " " + myLibrary[i].author + " " +myLibrary[i].pages + " " + myLibrary[i].read
    newCard.appendChild(container);
}

    