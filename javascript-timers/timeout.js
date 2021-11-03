var $h1 = document.querySelector('h1');

setTimeout(callBack, 2000);

function callBack() {
  $h1.textContent = 'Hello There';
}
