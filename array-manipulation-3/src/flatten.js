/* exported flatten */

// make storage for output (empty array)
// look at each item on the array, starting from beginning until end
//  if any of those items are an array
//    output equals output combined with items from array
//    otherwise,
//    assign items from array to output storage
// give back output

function flatten(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      output = output.concat(array[i]);
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
