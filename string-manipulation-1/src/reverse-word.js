/* exported reverseWord */
// create storage for output (empty string)
// look at each character, starting from the end of the word, counting in reverse order, until the first character
// add each character to output and reassign that expression back to output
// give back output
function reverseWord(word) {
  var output = '';
  for (var i = word.length - 1; i >= 0; i--) {
    output += word[i];
  }
  return output;
}
