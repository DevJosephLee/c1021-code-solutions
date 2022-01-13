/* exported getLength */

function getLength(list) {
  var count = 0
  while (list !== null) {
    count++
    list = list.next
  }
  return count
}
