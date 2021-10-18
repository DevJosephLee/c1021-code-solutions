/* exported lastChars */
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
