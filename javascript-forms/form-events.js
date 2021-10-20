var $inputText = document.querySelector('input[type="text"]');
var $inputEmail = document.querySelector('input[type="email"]');
var $textarea = document.querySelector('textarea');

$inputText.addEventListener('focus', handleFocus);
$inputText.addEventListener('blur', handleBlur);
$inputText.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);

function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}
