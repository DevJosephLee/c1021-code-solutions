/* exported lastChars */
// create storage for output (empty string)
// look at each character, starting from length of characters minus length, until length of string
//   if length of characters of string is less than string
//     output equals string
//     otherwise,
//     add string characters to output
// give back output
function lastChars(length, string) {
  var output = '';
  for (var i = string.length - length; i < string.length; i++) {
    if (string.length < length) {
      output = string;
    } else {
      output += string[i];
    }
  }
  return output;
}
