const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

function evenNumbers(num) {
  if (num % 2 === 0) {
    return num;
  }
}

function overFive(num) {
  return num > 5;
}

function startWithE(name) {
  if (name[0] === 'E') {
    return name;
  }
}

function haveD(name) {
  if (name.includes('d') || name.includes('D')) {
    return name;
  }
}

console.log(names.filter(haveD));
