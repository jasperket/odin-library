const myLibrary = [];

const addDialog = document.querySelector('dialog');
const btnAdd = document.querySelector('.add');

btnAdd.addEventListener('click', () => {
    addDialog.showModal();
})

function Book(title,author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    const library = document.querySelector('.library');
    library.innerHTML = "";

    for(let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        let read = ""

        if(book.read) {
            read = "Read"
        } else {
            read = "Unread"
        }

        card.innerHTML = "<h2>"+book.title+"</h2>"+
        "<h3>"+book.author+"</h3>"+
        "<p>Pages: "+book.pages+"</p>"+
        "<button class='"+read.toLowerCase()+"'>"+read+"</button>"+
        "<button class='remove' data-index='"+i+"'>Remove</button>";

        library.appendChild(card);
    }
}

btnSubmitBook = document.querySelector('submit-book');
btnSubmitBook.addEventListener('submit',() => {
    
})