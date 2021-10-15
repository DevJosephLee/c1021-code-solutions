/* exported countdown */
function countdown(number) {
  var output = [];
  for (var i = number; i >= 0; i--) {
    output.push(i);
  }
  return output;
}
