/* exported capitalizeWords */
function capitalizeWords(string) {
  var output = '';
  var currentWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord += string[i];
    } else {
      output += currentWord[0].toUpperCase() + currentWord.slice(1).toLowerCase() + ' ';
      currentWord = '';
    }
  }
  output += currentWord[0].toUpperCase() + currentWord.slice(1).toLowerCase();
  return output;
}
