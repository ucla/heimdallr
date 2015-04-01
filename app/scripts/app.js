/////////////////////////////////////////
///     load & configure webshims
/////////////////////////////////////////

webshim.setOptions('forms', {
  //set lazyCustomMessages to true
  lazyCustomMessages: true,
  //show custom styleable validation bubble
  replaceValidationUI: true,
  handleBubble: 'hide',
  fieldWrapper: '.fieldset',
  iVal: {
    'recheckDelay': 200,
  }
});

//start polyfilling
webshim.polyfill('forms forms-ext sticky');

// add sticky to account-actions for chrome
$('.account-actions')
	.addClass('ws-sticky')
	.trigger('wssticky')
;
