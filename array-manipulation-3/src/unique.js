/* exported unique */

// create storage for output (empty array)
// look at each item in the array, starting from beginning until end
//    if any item from output is not included in array
//      assign those values to output
// give back output

function unique(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}
