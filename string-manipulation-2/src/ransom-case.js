/* exported ransomCase */
// create storage for output (empty string)
// look at each character starting from beginning
// if the place of character is odd
//   add characters as uppercase to output storage
//   otherwise,
//   add characters as lowercase to output storage
// give back output storage
function ransomCase(string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      output += string[i].toUpperCase();
    } else {
      output += string[i].toLowerCase();
    }
  }
  return output;
}
