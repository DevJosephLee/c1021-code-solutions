/* exported flatten */

// make storage for output (empty array)
// flatten array and assign that value to output
// give back output

function flatten(array) {
  var output = [];
  output = [].concat.apply([], array);
  return output;
}
