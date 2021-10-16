/* exported getValues */
// create storage for output (empty array)
// look for each key values at object
// assign object at key values to the output
// give back output
function getValues(object) {
  var output = [];
  for (var key in object) {
    output.push(object[key]);
  }
  return output;
}
