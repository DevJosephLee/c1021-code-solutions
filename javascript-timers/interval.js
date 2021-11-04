var $h1 = document.querySelector('h1');

var set = setInterval(changeTextContent, 1000);

var currentNumber = 4;

function changeTextContent() {
  currentNumber--;
  $h1.textContent = currentNumber;
  if (currentNumber === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(set);
  }
}
