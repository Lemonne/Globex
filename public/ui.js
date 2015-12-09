/**
 * ui.js
 *
 * Defines functionality for instrumenting the user-interface.
 *
 */

var toggle = function() {

    console.log('About!');
    // Grab the html element with the ID “about”
    var el = document.getElementById('about');

    if (hasClass(el, 'show')) {
    	removeClass(el, 'show');
    }
    else {
    	addClass(el, 'show')
    }

};

var initialize = function() {

    console.log('Initialize!');

    // Grab the 'About' button element, identified by the
    // 'about-btn' id.
   // var button = document.getElementById('about-btn');

    // From this point forward, when the button is clicked, the
    // toggle function shall be invoked.
   // button.onclick = toggle;

	 // Grab the 'Submit' button element, identified by the
    // 'submit-btn' id.
    var button = document.getElementById('submit-btn');
	  var incr_button = document.getElementById('increase-year');
    var decr_button = document.getElementById('decrease-year');
    // From this point forward, when the button is clicked, the
    // fetch function shall be invoked.
    button.onclick = fetch;
	  incr_button.onclick = increase;
    decr_button.onclick = decrease;

};

var increase = function(){
  var infobox = document.getElementById('info-box');
  infobox.value = "You pressed:\n\tIncrease";
  var element = document.getElementById('year');
	var input = element.value;

  var match = input.match(/\d{4}-\d{4}/);
  if (match == null || match.length != 1){
    console.log("IT DID NOT MATCH");
    return;
  }
	var input_value = input.replace(/\d+/g, function(val){
		return (parseInt(val) + 1).toString();
	});
	vizController(input_value);
  element.value = input_value;
}

var decrease = function(){
  var infobox = document.getElementById('info-box');
  infobox.value = "You pressed:\n\tDecrease";
  var element = document.getElementById('year');
	var input = element.value;

  var match = input.match(/\d{4}-\d{4}/);
  if (match == null || match.length != 1){
    console.log("IT DID NOT MATCH");
    return;
  }
	var input_value = input.replace(/\d+/g, function(val){
		return (parseInt(val) - 1).toString();
	});
	vizController(input_value);
  element.value = input_value;
}

var fetch = function() {

	var year_element = document.getElementById('year');
	var year_value = year_element.value;
	console.log(year_value);
	vizController(year_value);
}

// When this file is included at the bottom of the page,
// the js is loaded after the DOM is loaded.  It is a
// good time to initialize the UI elements in the page.
initialize();
