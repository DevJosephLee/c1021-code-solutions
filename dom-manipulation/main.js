var numOfTimesClicked = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function () {
  numOfTimesClicked++;
  $clickCount.textContent = 'Clicks: ' + numOfTimesClicked;
  if (numOfTimesClicked < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numOfTimesClicked < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numOfTimesClicked < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numOfTimesClicked < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numOfTimesClicked < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
