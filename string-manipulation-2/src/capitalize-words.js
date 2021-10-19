/* exported capitalizeWords */
// create storage for output (empty string)
// create storage for current word (empty string)
// look at each character in string, beginning from start
//   if character is not blank
//     add those characters to current word storage
//     otherwise,
//     the first character captialized plus the rest of the characters lowercased plus a blank space is added to output storage
//     current word becomes blank
// the first character captialized plus the rest of the characters lowercased is added to output storage
// give back output
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
