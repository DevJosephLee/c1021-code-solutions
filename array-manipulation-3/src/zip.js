/* exported zip */

// make a storage for output (empty array)
// make a storage for the shorter length of first and second
// look at each item from the first array, starting from beginning until the shorter length between first and second
//    assign first two elements of each array into output
// give back output

function zip(first, second) {
  var output = [];
  var length = Math.min(first.length, second.length);
  for (var i = 0; i < length; i++) {
    output.push([].concat(first[i], second[i]));
  }
  return output;
}
