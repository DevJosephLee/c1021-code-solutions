/* exported reverseWords */
// make a storage for output (empty string)
// make a storage for temp (empty array)
// make a storage for stringReversedArray, and assign its value
// look at each item, starting from the end of stringReversedArray, until the start of stringReversedArray
//    assign each of those items to temp
// join temp as a string and assign that value to output
// give back output

function reverseWords(string) {
  var output = '';
  var temp = [];
  var stringReversedArray = string.split('').reverse().join('').split(' ');
  for (var i = stringReversedArray.length - 1; i >= 0; i--) {
    temp.push(stringReversedArray[i]);
  }
  output = temp.join(' ');
  return output;
}
