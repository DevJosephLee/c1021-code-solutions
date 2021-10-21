/* exported isPalindromic */
// create storage for start of the placement of a character and give it a value of number 0
// create storage for end of the placement of a character and give it a value of the end of the placement of characters
// create storage for the middle character, and give it the value of start and end divided by 2, which the decimals are deleted
// create storage for string with no spaces, and assign
// if the value of placement of character plus 1 is not equal to the value of placement of character minus 1
//   give back boolean false
//   otherwise,
//   give back boolean true
function isPalindromic(string) {
  var start = 0;
  var end = string.length - 1;
  var middleIndex = Math.floor(start + (end - start) / 2);
  var stringNoSpace = string.split(' ').join('');
  if (stringNoSpace[middleIndex + 1] !== stringNoSpace[middleIndex - 1]) {
    return false;
  } else {
    return true;
  }
}
