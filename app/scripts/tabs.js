(function (document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // foo
  });

  var tabs = document.querySelector('paper-tabs');
  var pages = document.querySelector('core-pages');

  tabs.addEventListener('core-select',function(){
    pages.selected = tabs.selected;
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
