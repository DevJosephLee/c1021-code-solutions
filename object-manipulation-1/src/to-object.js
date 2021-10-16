/* exported toObject */
// create a storage for output (empty curly braces)
// create a storage for key, which is the first item from keyValuePair, and assign
// create a storage for value, which is the second item from the keyValuePair, and assign
// output at key is equal to value
// give back output
function toObject(keyValuePair) {
  var output = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  output[key] = value;
  return output;
}
