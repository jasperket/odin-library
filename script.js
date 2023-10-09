const myLibrary = [];

const addDialog = document.querySelector('dialog');
const btnAdd = document.querySelector('.add');

btnAdd.addEventListener('click', () => {
    addDialog.showModal();
})

class Book {
    constructor(title,author,pages,read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        this.read = !(this.read);
    }
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

        if(myLibrary[i].read) {
            read = "Read"
        } else {
            read = "Unread"
        }

        card.innerHTML = "<h2>"+myLibrary[i].title+"</h2>"+
        "<h3>"+myLibrary[i].author+"</h3>"+
        "<p>Pages: "+myLibrary[i].pages+"</p>"+
        "<button class='"+read.toLowerCase()+"' data-index='"+i+"'>"+read+"</button>"+
        "<button class='remove' data-index='"+i+"'>Remove</button>";

        library.appendChild(card);
    }
    removeBooks();
    toggleReadBooks();
}

const btnClose = document.querySelector('.close-dialog');
btnClose.addEventListener('click',() => {
    addDialog.close();
})

const btnSubmitBook = document.querySelector('.submit-book');
btnSubmitBook.addEventListener('click',(e) => {
    e.preventDefault();
    
    const title = document.querySelector('#add-title').value;
    const author = document.querySelector('#add-author').value;
    const pages = parseInt(document.querySelector('#add-pages').value);
    const read = document.querySelector('#add-read').checked;

    const book = new Book(title,author,pages,read);
    addBookToLibrary(book);
    addDialog.close();
    displayLibrary();

    const form = document.querySelector('#add-book');
    form.reset();
})

function removeBooks() {
    const btnsRemoveBook = document.querySelectorAll('.remove');
    btnsRemoveBook.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const indexToRemove = btn.dataset.index;
            myLibrary.splice(indexToRemove,1);
            displayLibrary();
        })
    })
}

function toggleReadBooks() {
    const btnsReadStatus = document.querySelectorAll('.read, .unread');
    btnsReadStatus.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const indexToToggle = btn.dataset.index;
            myLibrary[indexToToggle].toggleRead();
            displayLibrary();
        })
    })
}