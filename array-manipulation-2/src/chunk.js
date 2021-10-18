/* exported chunk */
function chunk(array, size) {
  var output = [];
  for (var i = 0; i < array.length; i += size) {
    // output.push(array.slice(i, i + size));
    output.push(array.slice(i, i + size));
  }
  return output;
}
