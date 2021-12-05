/* exported union */

// make storage for output
// make storage for temp and merge first array and second array together
// look through each item in temp
//  if any item from output is not included in array
//    assign those values to output
// give back output

function union(first, second) {
  var output = [];
  var temp = [].concat(first, second);
  for (var i = 0; i < temp.length; i++) {
    if (!output.includes(temp[i])) {
      output.push(temp[i]);
    }
  }
  return output;
}
