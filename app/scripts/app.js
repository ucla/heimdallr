/////////////////////////////////////////
///     load & configure webshims
/////////////////////////////////////////

// https://afarkas.github.io/webshim/demos/index.html#Forms
// https://afarkas.github.io/webshim/demos/#Forms-forms-ext
webshim.setOptions({
  'forms': {
    //set lazyCustomMessages to true
    lazyCustomMessages: true,
    //show custom styleable validation bubble
    replaceValidationUI: true,
    handleBubble: 'hide',
    fieldWrapper: 'fieldset',
    iVal: {
      'recheckDelay': 200,
    }
  },
  'forms-ext': {
    // replace default browser implementation of date inputs
  	replaceUI: 'true',
  	types: 'date',
  	// pass some config for it
  	date: {
  		startView: 1,
  		size: 2,
  		openOnFocus: true,
  		classes: 'show-week'
	  }
  }
});

//start polyfilling
webshim.polyfill('forms forms-ext sticky');

// add sticky to account-actions for chrome
// https://afarkas.github.io/webshim/demos/index.html#sticky
$('.account-actions')
	.addClass('ws-sticky')
	.trigger('wssticky')
;

/////////////////////////////////////////
///         polymer behaviour
/////////////////////////////////////////

// glue together <paper-tabs> & <iron-pages>
document.addEventListener('WebComponentsReady', function () {
  var template = document.querySelector('template#tabbed-results-nav');
  if (template) {
    template.selected = 0; // selected is an index by default
  }
});

// modal dialog behaviour for <password-confirm>
function clickHandler(e) {
  if (!e.target.hasAttribute('data-dialog')) {
    return;
  }
  var id = e.target.getAttribute('data-dialog');
  var dialog = document.getElementById(id);
  if (dialog) {
    dialog.toggle();
    e.target.toggleAttribute && e.target.toggleAttribute('data-dialog-opened', dialog.opened);
  }
}
