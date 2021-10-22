var $tabContainer = document.querySelector('.tab-container');
var $tabNodeList = document.querySelectorAll('.tab');
var $viewNodeList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabNodeList.length; i++) {
      if (event.target === $tabNodeList[i]) {
        $tabNodeList[i].className = 'tab active';
      } else {
        $tabNodeList[i].className = 'tab';
      }
    }
    var $dataViewEventTarget = event.target.getAttribute('data-view');
    for (var j = 0; j < $viewNodeList.length; j++) {
      if ($dataViewEventTarget === $viewNodeList[j].getAttribute('data-view')) {
        $viewNodeList[j].className = 'view';
      } else {
        $viewNodeList[j].className = 'view hidden';
      }
    }
  }
});
