/* exported flatten */
function flatten(array) {
  var output = [].concat.apply([], array);
  return output;
}
