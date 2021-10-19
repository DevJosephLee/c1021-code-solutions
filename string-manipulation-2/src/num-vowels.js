/* exported numVowels */
// create storage for all the vowels, including uppercased
// create storage for output (number 0)
// look at each character in string, starting from beginning
//   look at each character in vowels, starting from beginning
//     if the characters in string are equal to characters in vowels
//       increment output storage by 1
// give back output
function numVowels(string) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var output = 0;
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        output++;
      }
    }
  }
  return output;
}
