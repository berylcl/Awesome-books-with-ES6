// eslint-disable-next-line max-classes-per-file

import Books from './modules/book-list.js';
import timenow from './modules/date.js';

const bookstore = new Books();

if (localStorage.getItem('books')) {
  bookstore.printfn();
}

const addBtn = document.getElementById('btn');
const title = document.getElementById('title');
const author = document.getElementById('author');

addBtn.addEventListener('click', () => {
  if (title.value !== '' && author.value !== '') {
    bookstore.addbooks(title.value, author.value);
    document.forms[0].reset();
  }
});

document.addEventListener('click', (removed) => {
  const { id } = removed.target;
  if (id.substr(0, 4) === 'book') {
    bookstore.deletebook(id);
  }
});
document.getElementById('lis').classList.add('active');

document.querySelector('.contact').style.display = 'none';
document.querySelector('.book').style.display = 'block';
document.querySelector('.add').style.display = 'none';

document.querySelector('#con').addEventListener('click', () => {
  document.getElementById('con').classList.add('active');
  document.getElementById('lis').classList.remove('active');
  document.getElementById('new').classList.remove('active');
  document.querySelector('.contact').style.display = 'block';
  document.querySelector('.book').style.display = 'none';
  document.querySelector('.add').style.display = 'none';
});

document.querySelector('#new').addEventListener('click', () => {
  document.getElementById('new').classList.add('active');
  document.getElementById('con').classList.remove('active');
  document.getElementById('lis').classList.remove('active');
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.book').style.display = 'none';
  document.querySelector('.add').style.display = 'block';
});

document.querySelector('#lis').addEventListener('click', () => {
  document.getElementById('lis').classList.add('active');
  document.getElementById('con').classList.remove('active');
  document.getElementById('new').classList.remove('active');
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.book').style.display = 'block';
  document.querySelector('.add').style.display = 'none';
});

document.querySelector('#logo').addEventListener('click', () => {
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.book').style.display = 'block';
  document.querySelector('.add').style.display = 'none';
});

const timer = document.getElementById('date');
const today = timenow;
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daySuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};
timer.innerHTML = `<p>${months[today.month - 1]}&nbsp ${today.day}${daySuffix(today.day)} &nbsp ${today.year}, &nbsp ${today.hour.toString().padStart(2, '0')}: ${today.min.toString().padStart(2, '0')} ${today.mid}<p>`;