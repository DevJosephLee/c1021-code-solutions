/* exported capitalize */
// create storage for new word
// create storage for first character, and assign uppercased first character
// create storage for the rest of character, and assign lowercased rest of character
// add uppercased first character with the lowercased rest of character
// return new word
function capitalize(word) {
  var newWord = '';
  var firstChar = word[0].toUpperCase();
  var restOfChar = word.slice(1).toLowerCase();

  newWord = firstChar + restOfChar;

  return newWord;
}
