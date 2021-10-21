/* exported reverseWords */
function reverseWords(string) {
  var output = '';
  var currentWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord = string[i] + currentWord;
    } else {
      output += currentWord + ' ';
      currentWord = '';
    }
  }
  output += currentWord;
  return output;
}
