/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined
  }
  const removedQueue = queue.dequeue();
  if (queue.peek() === undefined) {
    return removedQueue
  }
  const secondRemovedQueue = queue.dequeue();
  if (removedQueue < secondRemovedQueue) {
    queue.enqueue(secondRemovedQueue)
    return removedQueue
  }
  if (removedQueue === secondRemovedQueue) {
    queue.enqueue(secondRemovedQueue)
    return removedQueue
  }
  if (removedQueue > secondRemovedQueue) {
    queue.enqueue(removedQueue)
    return secondRemovedQueue
  }
}
