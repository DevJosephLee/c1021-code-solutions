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

function sum(previousValue, currentValue) {
  return previousValue + currentValue;
}

function product(previousValue, currentValue) {
  return previousValue * currentValue;
}


function balance(previousValue, currentValue) {
  // const negatize = account.map(account => {
  //   if (account.type === 'withdrawal') {
  //     return -account.amount;
  //   } else {
  //     return account.amount;
  //   }
  // })
  // return previousValue + currentValue.amount;
  return previousValue
}

const composite = traits.reduce((a, b) => {
  Object.keys(a)
  return a
}, {})

console.log(composite);
