/* exported tail */
// create storage for output (empty array)
// look at each item, starting from the second item,
//   assign each item to the output
//   give back output
function tail(array) {
  var output = [];
  for (var i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
