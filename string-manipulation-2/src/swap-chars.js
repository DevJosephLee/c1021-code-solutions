/* exported swapChars */
// create storage for array version of string, and assign
// create storage for temp value and assign arrayString at first index
// assign array at first index to array at second index
// assign array at second index to temp storage
// create storage for output and convert array version of string into string version
// give back output
function swapChars(firstIndex, secondIndex, string) {
  var arrayString = string.split('');
  var temp = arrayString[firstIndex];
  arrayString[firstIndex] = arrayString[secondIndex];
  arrayString[secondIndex] = temp;
  var output = arrayString.join('');
  return output;
}
