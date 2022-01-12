/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let counter = 0;
  if (queue.peek() === undefined) {
    return undefined
  }
  while (counter < index) {
    counter++
    const removedQueue = queue.dequeue()
    queue.enqueue(removedQueue)
  }
  const outputQueue = queue.dequeue()
  return outputQueue
}
