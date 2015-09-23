document.addEventListener('WebComponentsReady', function () {
  var template = document.querySelector('template#tabbed-results-nav');
  template.selected = 0; // selected is an index by default
});
