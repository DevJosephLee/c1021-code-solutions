/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var output = [];
  for (var i = 0; i < words.length; i++) {
    output.push(words[i] + suffix);
  }
  return output;
}
