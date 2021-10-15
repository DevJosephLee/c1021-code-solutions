/* exported reverse */
// create storage for output (empty array)
// look at each item on the list, starting from end, until and including the first item
// assign items to output
// give back output

function reverse(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}
