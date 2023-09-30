const myLibrary = [];

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
    myLibrary.forEach((book) => {
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
        "<button class='remove'>Remove</button>";

        library.appendChild(card);
    })
}