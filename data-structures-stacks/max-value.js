/* exported maxValue */

function maxValue(stack) {
  const values = []
  if (stack.peek() === undefined) {
    return -Infinity
  }
  while (stack.peek() !== undefined) {
    values.push(stack.pop())
  }
  return Math.max.apply(null, values)
}
