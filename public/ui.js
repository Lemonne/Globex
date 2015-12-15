/**
 * ui.js
 *
 * Defines functionality for instrumenting the user-interface.
 *
 */
var toggle = function() {

	console.log('About!');
	// Grab the html element with the ID â€œaboutâ€�
	var el = document.getElementById('about');

	if (hasClass(el, 'show')) {
		removeClass(el, 'show');
	} else {
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
	// button.onclick = fetch;
	incr_button.onclick = increase;
	decr_button.onclick = decrease;

};

var increase = function() {
	var element = document.getElementById('year');
	var input = element.value;

	var match = input.match(/\d{4}-\d{4}/);
	if (match == null || match.length != 1) {
		console.log("IT DID NOT MATCH");
		return;
	}
	var input_value = input.replace(/\d+/g, function(val) {
		return (parseInt(val) + 1).toString();
	});
	vizController(input_value);
	element.value = input_value;
	fetch();
}

function test(years) {
	var json = httpGet("https://dl.dropboxusercontent.com/s/fmykhihipxy433h/info.json?dl=0"); //https://dl.dropboxusercontent.com/s/2wblqrkufhpbrjz/info.json
	return JSON.parse(json)[years];
}

var decrease = function() {
	var element = document.getElementById('year');
	var input = element.value;

	var match = input.match(/\d{4}-\d{4}/);
	if (match == null || match.length != 1) {
		console.log("IT DID NOT MATCH");
		return;
	}
	var input_value = input.replace(/\d+/g, function(val) {
		return (parseInt(val) - 1).toString();
	});
	vizController(input_value);
	element.value = input_value;
	fetch();
}

function fetch() {
	var year_element = document.getElementById('year');
	var year_value = year_element.value;
	var infobox = document.getElementById('info-box');

	var output = "";
	try {
		var parsedJSON = test(year_value);
		Object.keys(parsedJSON).forEach(function(e) {
			output += ("Level " + e + ":\n");
			parsedJSON[e].forEach(function(f) {
				output += ("\t" + f + "\n");
			});
		});
		console.log("Output: " + output);
		infobox.value = output;
		console.log(output);
	}catch(error){
		console.log("Was not able to find data for this year");
		infobox.value = "No data for this year";
	}

	vizController(year_value);
	return false;
}

function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, false); // false for synchronous request
	xmlHttp.send(null);
	return xmlHttp.responseText;
}
// When this file is included at the bottom of the page,
// the js is loaded after the DOM is loaded. It is a
// good time to initialize the UI elements in the page.
initialize();
