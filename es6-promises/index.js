const takeAChance = require('./take-a-chance');

const myNamePromise = takeAChance('Joe');

myNamePromise.then(resolved => {
  console.log(resolved);
});

myNamePromise.catch(error => {
  console.log(error.message);
});
