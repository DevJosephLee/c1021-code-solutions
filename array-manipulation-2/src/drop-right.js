/* exported dropRight */
// create storage for output (empty array)
// look at each of the items, starting from the beginning of the list, until the length of the list minus count
// if the length of the item list is 0
//   give back an empty list
// otherwise,
// assign items to storage
// give back storage
function dropRight(array, count) {
  var output = [];
  if (array.length === 0) {
    return array;
  }
  for (var i = 0; i < array.length - count; i++) {
    output.push(array[i]);
  }
  return output;
}
