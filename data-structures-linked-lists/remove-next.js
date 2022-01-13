/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return list.data
  }
  const backHalf = list.next.next
  list.next = backHalf
}
