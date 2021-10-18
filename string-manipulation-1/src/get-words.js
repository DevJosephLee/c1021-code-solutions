/* exported getWords */
// create storage for array, in which the string is split depending on the spaces between each word
// if string is an empty string,
// give back an empty array
// otherwise,
// give back the array.

function getWords(string) {
  var stringSplit = string.split(' ');
  if (string === '') {
    return [];
  } else {
    return stringSplit;
  }
}
