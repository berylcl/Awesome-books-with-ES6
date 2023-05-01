import Bookdata from './books.js';

export default class Books {
    bookLists = [];

    bookno = 1;

    constructor(book) {
      this.Book = book;
    }

    printfn = () => {
      const body = document.querySelector('.added-books');
      body.replaceChildren();
      const localbooks = JSON.parse(localStorage.getItem('books'));
      this.bookLists = localbooks;
      let index = 1;
      localbooks.forEach((book) => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <p>"${book.Title}" by ${book.Author}</p>
        <button type="button" class="remove" data-id="${book.Id}">Remove</button>
      `;
        if (index % 2 !== 0) {
          newDiv.classList.add('blue');
        }
        newDiv.classList.add('book-line');
        body.append(newDiv);
        index += 1;
      });
      const removeButtons = document.querySelectorAll('.remove');
      removeButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const bookId = button.dataset.id;
          this.deletebook(bookId);
        });
      });
    }

    addbooks = (title, author) => {
      this.Book = new Bookdata(`book${this.bookno}`, title, author);
      this.bookLists.push(this.Book);
      localStorage.setItem('books', JSON.stringify(this.bookLists));
      this.printfn();
      this.bookno += 1;
    }

    deletebook = (id) => {
      this.bookLists = this.bookLists.filter((b) => b.Id !== id);
      localStorage.setItem('books', JSON.stringify(this.bookLists));
      this.printfn();
    }
}
