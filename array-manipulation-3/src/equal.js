/* exported equal */

// if the length of first is not equal to length of second
//   give back false
// look at each item of first array, starting from beginning until end
//   if index of first array at first array is strictly not equal to index of first array at second array
//   give back false
// give back true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
