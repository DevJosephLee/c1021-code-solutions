var $modalButton = document.querySelector('.open-modal-button');
var $noButton = document.querySelector('.no-button');
var $hidden = document.querySelector('.hidden');

$modalButton.addEventListener('click', clickModalButton);
$noButton.addEventListener('click', clickNoButton);

function clickModalButton(event) {
  $hidden.className = 'show';
}

function clickNoButton(event) {
  $hidden.className = 'hidden';
}
