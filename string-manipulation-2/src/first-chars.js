/* exported firstChars */
// create storage for output (empty string)
// look at each character, starting from beginning until length
//   if length of characters of string is less than length
//     give back string
//     otherwise,
//     add string characters to output
// give back output
function firstChars(length, string) {
  var output = '';
  for (var i = 0; i < length; i++) {
    if (string.length < length) {
      return string;
    } else {
      output += string[i];
    }
  }
  return output;
}
