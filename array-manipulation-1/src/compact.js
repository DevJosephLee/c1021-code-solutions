/* exported compact */
// create storage for output (empty array)
// look at each item in the list, starting from the first item
// if the list of items is not a falsy value
// assign items to the output
// give back output
function compact(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i] === false) {
      output.push(array[i]);
    }
  }
  return output;
}
