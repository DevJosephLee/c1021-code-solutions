/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return undefined
  }
  const removeQueue = queue.dequeue();
  queue.enqueue(removeQueue)
  return queue.peek()
}
