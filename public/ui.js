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
    // From this point forward, when the button is clicked, the
    // fetch function shall be invoked.
    button.onclick = fetch;
	incr_button.onclick = increase;
};
var increase = function(){
	var input = document.getElementById('year');
	input = input.toString();
	console.log(input);
	var input_value = input.replace("/\d+/", function(val){
		return parseInt(val) + 1;
	});
	console.log(input_value);
	vizController(input_value);
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
