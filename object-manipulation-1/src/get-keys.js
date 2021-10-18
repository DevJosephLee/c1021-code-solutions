/* exported getKeys */
// create storage for output (empty array)
// look for each key at object
// assign those key values to output
// give back output
function getKeys(object) {
  var output = [];
  for (var key in object) {
    output.push(key);
  }
  return output;
}
