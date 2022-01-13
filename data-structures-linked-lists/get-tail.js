/* exported getTail */

function getTail(list) {
  while (list !== null) {
    if (list.next === null) {
      return list.data
    }
    list = list.next
  }
}
