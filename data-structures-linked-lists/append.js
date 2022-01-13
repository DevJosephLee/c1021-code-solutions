/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  var newList = new LinkedList(value)
  while (list !== null) {
    if (list.next === null) {
      list.next = newList
      return
    }
    list = list.next
  }
}
