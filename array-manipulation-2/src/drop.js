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
  if (array.length === 0) {
    return array;
  }
  for (var i = count; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
