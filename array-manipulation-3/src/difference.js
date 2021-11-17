/* exported difference */

// make storage for output (empty array)
// make storage for tempOne (empty array)
// make storage for tempTwo (empty array)
// look at each item of first array, starting from beginning until end
//   if any items from second array is not included in items in first array
//      assign those first items into tempOne
// look at each item of second array, starting from beginning until end
//   if any items from the first array is not included in items in second array
//      assign those second items into tempTwo
// combine tempOne and tempTwo and assign that value to output
// give back output

function difference(first, second) {
  var output = [];
  var tempOne = [];
  var tempTwo = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      tempOne.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      tempTwo.push(second[j]);
    }
  }
  output = [].concat(tempOne, tempTwo);
  return output;
}
