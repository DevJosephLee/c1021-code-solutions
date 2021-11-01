/* exported take */
// create storage for output (empty array)
// look at each of the items in the list, starting from the beginning until count
// if the length of the item list is 0,
//   give back an empty list
// otherwise,
//   assign items to the storage
// give back the storage
function take(array, count) {
  var output = [];
  if (array.length === 0) {
    return array;
  }
  for (var i = 0; i < count; i++) {
    output.push(array[i]);
  }
  return output;
}
