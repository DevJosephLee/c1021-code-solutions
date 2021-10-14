/* exported filterOutNulls */
function filterOutNulls(values) {
  var output = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      output.push(values[i]);
    }
  }
  return output;
}
