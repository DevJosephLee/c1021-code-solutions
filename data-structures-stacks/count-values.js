/* exported countValues */

function countValues(stack) {
  const values = []
  while (stack.peek() !== undefined) {
    values.push(stack.pop())
  }
  return values.length
}
