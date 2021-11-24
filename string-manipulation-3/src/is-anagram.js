/* exported isAnagram */
// create storage for alphabetized first string and assign its value
// create storage for alphabetized second string and assign its value
// if alphabetized first string is equal to alphabetized second string
//  give back true
//  otherwise,
//  give back false
function isAnagram(firstString, secondString) {
  var alphabetizedFirstString = firstString.split(' ').join('').split('').sort().join('');
  var alphabetizedSecondString = secondString.split(' ').join('').split('').sort().join('');
  if (alphabetizedFirstString === alphabetizedSecondString) {
    return true;
  } else {
    return false;
  }
}
