/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var noSpaceFirstString = firstString.split(' ').join('');
  var noSpaceSecondString = secondString.split(' ').join('');
  return noSpaceFirstString.includes(noSpaceSecondString);

}

// for (var i = 0; i < noSpaceFirstString.length; i++) {
// for (var j = 0; j < noSpaceSecondString.length; j++) {
//   if (i !== j) {
//     return false;
//   } else if (noSpaceFirstString[i] !== noSpaceSecondString[j]) {
//     return false;
//   }
// }
//   }
// return true;
