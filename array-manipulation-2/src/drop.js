/* exported drop */
// create storage for output (empty array)
// look at each of the items in the list, starting from the count until the end of the list
// if the length of the item list is 0,
//   give back an empty list
// otherwise,
//   assign items to the storage
// give back the storage
function drop(array, count) {
  var output = [];
  for (var i = count; i < array.length; i++) {
    if (array.length === 0) {
      return [];
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
