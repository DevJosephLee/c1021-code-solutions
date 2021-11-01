/* exported chunk */
// create storage for output (empty array)
// look at each item in the array, starting from the beginning, in chunks of two
//   assign items to output storage, in slice of the lengths of array and lengths of array plus size
// give back output storage

function chunk(array, size) {
  var output = [];
  for (var i = 0; i < array.length; i += size) {
    output.push(array.slice(i, i + size));
  }
  return output;
}
