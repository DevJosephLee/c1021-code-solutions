/* exported equal */

// look at each item of first array, starting from beginning until end
//  look at each item of second array, starting from the beinning until end
//    if index of first array at first array is strictly not equal to index of first array at second array
//      give back false
//      else if, index of second array at first array is strictly not equal to index of second array at second array
//      give back false
// give back true

function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] !== second[i]) {
        return false;
      } else if (first[j] !== second[j]) {
        return false;
      }
    }
  }
  return true;
}
