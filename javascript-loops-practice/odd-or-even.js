/* exported oddOrEven */
function oddOrEven(numbers) {
  var output = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      output.push('odd');
    } else {
      output.push('even');
    }
  }
  return output;
}
