const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// target account.amount
// const output = 0
// if (accout.type === 'deposit')
// output += account.amount
// else
// output -= account.amount
// return output
const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((a, b) => {
  return a + b
})

const product = numbers.reduce((a, b) => {
  return a * b
})

const balance = account.reduce((sum, i) => {
  if (i.type === 'deposit') {
    sum += i.amount;
  } else {
    sum -= i.amount;
  }
  return sum;
}, 0)

const composite = traits.reduce((a, i) => {
  const keys = Object.keys(i);
  const values = Object.values(i).pop();
  a[keys] = values;
  return a
}, {})
