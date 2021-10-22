var books = [
  {
    isbn: '0061964360',
    title: 'Pride & Prejudice',
    author: 'Jane Austen'
  },
  {
    isbn: '‎9780451524935',
    title: '1984',
    author: 'George Orwell'
  },
  {
    isbn: '9780374531263',
    title: 'A Long Way Gone: Memoirs of a Boy Soldier',
    author: 'Ishmael Beah'
  }
];

console.log('value of books:', books);
console.log('typeof books:', typeof books);

var booksJSON = JSON.stringify(books);

console.log('value of booksJSON:', booksJSON);
console.log('typeof booksJSON:', typeof booksJSON);

var student = '{ "id": 456, "name": "Joseph Lee"}';

console.log('value of student:', student);
console.log('typeof student:', typeof student);

var studentParse = JSON.parse(student);

console.log('value of studentParse:', studentParse);
console.log('typeof studentParse:', typeof studentParse);
