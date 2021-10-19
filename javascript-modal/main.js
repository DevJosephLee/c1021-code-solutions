var $modalButton = document.querySelector('.open-modal-button');
var $noButton = document.querySelector('.no-button');
var $background = document.querySelector('.bg-white');
var $hidden = document.querySelector('.hidden');

$modalButton.addEventListener('click', clickModalButton);
$noButton.addEventListener('click', clickNoButton);

function clickModalButton(event) {
  $background.className = 'bg-323232';
  $hidden.className = 'show';
}

function clickNoButton(event) {
  $background.className = 'bg-white';
  $hidden.className = 'hidden';
}
