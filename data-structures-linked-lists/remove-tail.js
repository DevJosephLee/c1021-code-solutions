/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return
  }
  while (list !== null) {
    if (list.next.next === null) {
      list.next = null
    }
    list = list.next
  }
}
