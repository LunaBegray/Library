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

let addBtn = document.querySelector(".addBtn");
addBtn.addEventListener('click', function(){
    let form = document.createElement("div");
    form.classList.add("form");
    let inputName = document.createElement("input")
    let inputAuthor = document.createElement("input")
    let inputPages = document.createElement("input")
    let inputRead = document.createElement("input")
    form.appendChild(inputName);
    form.appendChild(inputAuthor);
    form.appendChild(inputPages);
    form.appendChild(inputRead);
    let continueBtn = document.createElement("button");
    continueBtn.addEventListener('click', function(){
        let nameFNB = inputName.value;
        let authorFNB  = inputAuthor.value;
        let pagesFNB = inputPages.value;
        let readFNB = input.value;
        let newBook = new Book(nameFNB, authorFNB, pagesFNB, readFNB);
        addBookToLibrary(newBook);
        console.log(newBook);
        console.log(myLibrary);
        form.remove();
    });
    form.appendChild(continueBtn);
    container.appendChild(form);
}
); 

for(i = 0; i < myLibrary.length; i++){
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.textContent = myLibrary[i].name + " " + myLibrary[i].author + " " +myLibrary[i].pages + " " + myLibrary[i].read
    container.appendChild(newCard);
}
