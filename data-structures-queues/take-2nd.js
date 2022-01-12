/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined
  }
  const removeQueue = queue.dequeue()
  if (queue.peek() === undefined) {
    queue.enqueue(removeQueue)
  }
  const secondRemovedQueue = queue.dequeue()
  queue.enqueue(removeQueue)
  return secondRemovedQueue
}
