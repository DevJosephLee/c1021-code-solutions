/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity
  }
  var currentStack = stack.peek()
  while (stack.peek() !== undefined) {
    var nextStack = stack.pop()
    if (currentStack < nextStack) {
      currentStack = nextStack
    }
  }
  return currentStack
}
