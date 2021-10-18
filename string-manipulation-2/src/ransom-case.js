/* exported ransomCase */
function ransomCase(string) {
  // odd indexes = mod 2 !== 0
  // even indexes = mod 2 === 0
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
