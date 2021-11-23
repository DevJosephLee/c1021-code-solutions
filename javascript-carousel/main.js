var $buttonContainer = document.querySelector('.button-container');
var $buttonNodeList = document.querySelectorAll('button');
var $imgNodeList = document.querySelectorAll('img');
var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var currentDataNumber = 1;

setInterval(switchImgs, 2000);

function switchImgs() {
  currentDataNumber++;
  changeButtonColor();
  for (var i = 0; i < $imgNodeList.length; i++) {
    if (currentDataNumber === parseInt($imgNodeList[i].getAttribute('dataid'))) {
      $imgNodeList[i].className = 'view';
    } else {
      $imgNodeList[i].className = 'hidden';
    }
  }
  if (currentDataNumber === 5) {
    currentDataNumber = 0;
  }
}

function clickButtons(event) {
  if (!event.target.matches('button')) {
    return;
  }
  if (event.target.getAttribute('dataid') < currentDataNumber) {
    currentDataNumber--;
    changeButtonColor();
  } else {
    currentDataNumber++;
    changeButtonColor();
  }
  var $dataViewEventTarget = event.target.getAttribute('data-view');
  for (var i = 0; i < $imgNodeList.length; i++) {
    if ($imgNodeList[i].getAttribute('data-view') === $dataViewEventTarget) {
      $imgNodeList[i].className = 'view';
    } else {
      $imgNodeList[i].className = 'hidden';
    }
  }
  currentDataNumber = event.target.getAttribute('dataid');
  var interval = setInterval(switchImgs, 2000);
  clearInterval(interval);
}

function rightArrowClick(event) {
  currentDataNumber++;
  changeButtonColor();
  for (var i = 0; i < $imgNodeList.length; i++) {
    if (currentDataNumber === parseInt($imgNodeList[i].getAttribute('dataid'))) {
      $imgNodeList[i].className = 'view';
    } else {
      $imgNodeList[i].className = 'hidden';
    }
  }
  if (currentDataNumber === 5) {
    currentDataNumber = 0;
  }
  var interval = setInterval(switchImgs, 2000);
  clearInterval(interval);
}

function leftArrowClick(event) {
  currentDataNumber--;
  if (currentDataNumber === 0) {
    currentDataNumber = 5;
  }
  changeButtonColor();
  for (var i = 0; i < $imgNodeList.length; i++) {
    if (currentDataNumber === parseInt($imgNodeList[i].getAttribute('dataid'))) {
      $imgNodeList[i].className = 'view';
    } else {
      $imgNodeList[i].className = 'hidden';
    }
  }
  var interval = setInterval(switchImgs, 2000);
  clearInterval(interval);
}

function changeButtonColor() {
  for (var j = 0; j < $buttonNodeList.length; j++) {
    if (currentDataNumber === parseInt($buttonNodeList[j].getAttribute('dataid'))) {
      $buttonNodeList[j].className = 'black';
    } else {
      $buttonNodeList[j].className = 'white';
    }
  }
}

$buttonContainer.addEventListener('click', clickButtons);
$rightArrow.addEventListener('click', rightArrowClick);
$leftArrow.addEventListener('click', leftArrowClick);
