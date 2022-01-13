/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list
  }
  const newList = new LinkedList(list.next.data, list.data)
  newList.next.next = list.next.next
  return newList
}
