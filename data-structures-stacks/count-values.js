/* exported countValues */

function countValues(stack) {
  var count = 0
  while (stack.peek() !== undefined) {
    stack.pop()
    count++
  }
  return count
}
