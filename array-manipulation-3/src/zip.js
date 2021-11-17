/* exported zip */

// make a storage for output (empty array)
// make a storage for temp (empty array)
// if the length of first array is greater than the length of second array
//    remove the last item from first array
//    also, if the the length of second array is greater than the length of first array
//    remove the last item from second array
// look at each item from the first array, starting from beginning until end
//    assign items from first array to temp
//    assign same amount of items as first array to second array to temp
// look at each item from temp array, starting from beginning until end, in chuncks of two
//    assign items from temp, in chuncks of two, to the output array
// give back output

function zip(first, second) {
  var output = [];
  var temp = [];
  if (first.length > second.length) {
    first.pop();
  } else if (first.length < second.length) {
    second.pop();
  }
  for (var i = 0; i < first.length; i++) {
    temp.push(first[i]);
    temp.push(second[i]);
  }
  for (var j = 0; j < temp.length; j += 2) {
    output.push(temp.slice(j, j + 2));
  }
  return output;
}
