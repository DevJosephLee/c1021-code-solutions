/* exported equal */
function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] !== second[j]) {
        return false;
      }
    }
  }
  return true;
}
