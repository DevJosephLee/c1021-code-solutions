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
  if (num % 2 !== 0) {
    return false;
  }
  return true;
}

function overFive(num) {
  if (num < 5 && num.includes(0)) {
    return false;
  }
  return true;
}

function startWithE(name) {
  if (name[0] !== 'E') {
    return false;
  }
  return true;
}

function haveD(name) {
  if (!name.includes('d') || !name.includes('D')) {
    return false;
  }
  return true;
}
