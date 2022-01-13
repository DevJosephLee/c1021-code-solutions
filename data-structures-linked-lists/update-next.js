/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return list.data
  }
  list.next.data = value
}
