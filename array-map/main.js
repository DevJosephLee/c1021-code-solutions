const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

function doubled(num) {
  return num * 2;
}

function prices(num) {
  return `$${num}.00`;
}

function upperCased(sent) {
  return sent.toUpperCase();
}

function firstLetters(sent) {
  return sent[0];
}
