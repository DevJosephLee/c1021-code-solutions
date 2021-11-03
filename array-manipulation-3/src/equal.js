/* exported equal */
// if the length of the first list and second list are not the same
//  give back false
//  else if the first item on first list and first item on second list are not the same
//  give back false
// look at each item on the first list
//  if the second list of items does not include the first list of items
//    give back false
//  give back grue
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else if (first[0] !== second[0]) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      return false;
    }
  }
  return true;
}
