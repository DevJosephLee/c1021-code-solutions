/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined
  }

  while (queue.peek() !== undefined) {
    const currentQueue = queue.dequeue();
    if (queue.peek() === undefined) {
      return currentQueue
    } else if (currentQueue <= queue.peek()) {
      return currentQueue
    } else if (currentQueue > queue.peek()) {
      queue.enqueue(currentQueue)
    }
  }
}
