var index = 0;
var $spans = document.querySelectorAll('span');

$spans[index].className = 'underline';

document.addEventListener('keydown', keydown);

function keydown(event) {
  if (event.key === $spans[index].textContent) {
    $spans[index].className = 'correct';
    $spans[index + 1].className = 'underline';
    index++;
  } else {
    $spans[index].className = 'incorrect';
  }
}
