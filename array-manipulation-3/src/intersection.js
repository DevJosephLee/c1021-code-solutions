/* exported intersection */

// make storage for output (empty array)
// make storage for temp (empty array)
// look at each item in the first array, starting from beginning to end
//  look at each item in the second array, starting from beginning to end
//    if any items from first array are same as any items from second array
//      assign those items to temp array
// look at each item in the temp array, starting from beginning to end
//  if any items from temp is not included in output array
//    assign those items to output
// give back output

function intersection(first, second) {
  var output = [];
  var temp = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        temp.push(first[i], second[j]);
      }
    }
  }
  for (var k = 0; k < temp.length; k++) {
    if (!output.includes(temp[k])) {
      output.push(temp[k]);
    }
  }
  return output;
}
