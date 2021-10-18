var $clickButton = document.querySelector('.click-button');

function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

$clickButton.addEventListener('click', handleClick);

var $hoverButton = document.querySelector('.hover-button');

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

$hoverButton.addEventListener('mouseover', handleMouseover);

var $doubleClickButton = document.querySelector('.double-click-button');

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
