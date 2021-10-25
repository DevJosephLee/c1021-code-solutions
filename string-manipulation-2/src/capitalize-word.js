/* exported capitalizeWord */
// if lowercased word is equal to javascript,
// give back JavaScript
// give back first character uppercased plus rest of word lowercased
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
