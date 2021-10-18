/* exported isVowel */
// create storage for all vowels and assign every vowels, including uppercased vowels.
// look at each vowel starting from the first character
//   if any vowel is same as char.
//   give back boolean value of true
//   give back boolean value of false

function isVowel(char) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) {
      return true;
    }
  }
  return false;
}
