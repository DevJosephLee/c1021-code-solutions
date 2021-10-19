var $lightBulb = document.querySelector('button');
var $lightsOff = document.querySelector('.lights-off');

$lightBulb.addEventListener('click', flipSwitch);

function flipSwitch(event) {
  if ($lightBulb.className === 'light-bulb-off') {
    $lightBulb.className = 'light-bulb-on';
    $lightsOff.className = 'lights-on';
  } else {
    $lightBulb.className = 'light-bulb-off';
    $lightsOff.className = 'lights-off';
  }
}
