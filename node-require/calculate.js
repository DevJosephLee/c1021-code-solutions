const add = require('./add');
const multiply = require('./multiply');
const divide = require('./divide');
const subtract = require('./subtract');

const numOne = parseInt(process.argv[2]);
const numTwo = parseInt(process.argv[4]);

module.exports = add;
module.exports = multiply;
module.exports = divide;
module.exports = subtract;

if (process.argv[3] === 'plus') {
  console.log(`result: ${add(numOne, numTwo)}`);
} else if (process.argv[3] === 'times') {
  console.log(`result: ${multiply(numOne, numTwo)}`);
} else if (process.argv[3] === 'minus') {
  console.log(`result: ${subtract(numOne, numTwo)}`);
} else if (process.argv[3] === 'over') {
  console.log(`result: ${divide(numOne, numTwo)}`);
}
