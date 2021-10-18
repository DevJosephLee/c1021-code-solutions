/* exported takeRight */
// create storage for output (empty array)
// look at each of the items, starting from the length of the list minus count, until the length of the list
// if the length of the item list is 0
//   give back an empty list
// otherwise,
// assign items to storage
// give back storage
function takeRight(array, count) {
  var output = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (array.length === 0) {
      return [];
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
