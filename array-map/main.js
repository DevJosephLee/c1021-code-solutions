const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(num => {
  return num * 2;
})

const prices = numbers.map(num => {
  return `$${num}.00`;
})

const upperCased = languages.map(sent => {
  return sent.toUpperCase();
})

const firstLetters = languages.map(sent => {
  return sent[0]
})
