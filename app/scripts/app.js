/////////////////////////////////////////
///     load & configure webshims
/////////////////////////////////////////

webshim.setOptions('forms', {
  //set lazyCustomMessages to true
  lazyCustomMessages: true,
  //show custom styleable validation bubble
  replaceValidationUI: true,
  iVal: {
    "recheckDelay": 200,
  }
});

//start polyfilling
webshim.polyfill('forms');
