/* exported initial */
// create storage for output (empty array)
// look at each item in the array, starting from the start, until 1 less than the end of items
// assign each items into output
// give back output
function initial(array) {
  var output = [];
  for (var i = 0; i < array.length - 1; i++) {
    output.push(array[i]);
  }
  return output;
}
