/* exported firstChars */
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
