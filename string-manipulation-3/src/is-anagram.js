/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var noSpaceFirstString = firstString.split(' ');
  var noSpaceSecondString = secondString.split(' ');
  for (var i = 0; i < noSpaceFirstString.length; i++) {
    // console.log(noSpaceFirstString[i]);
    for (var j = 0; j < noSpaceSecondString.length; j++) {
      // console.log(noSpaceSecondString[j]);
      if (noSpaceFirstString[i] === noSpaceSecondString[j]) {
        return true;
      }
    }
  }
  return false;
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

// if (noSpaceFirstString.includes(noSpaceSecondString)) {
//   return true;
// } else if ()
// if (firstString.includes(secondString) && firstString.length === secondString.length) {
//   return true;
// } else {
//   return false;
// }
