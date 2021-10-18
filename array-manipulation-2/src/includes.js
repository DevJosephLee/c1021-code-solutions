/* exported includes */
// look at each item in the array, starting from beginning
// if each item is equal to value
//   give back true
// give back false
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
