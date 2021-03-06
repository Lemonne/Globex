/*
 * viz.js
 *
 * Defines:
 * - The data to be visualized in the chart.
 * - The options for the look of the chart to be drawn.
 * - How to draw the chart.
 *
 * @author: Tanya L. Crenshaw
 * @author: Nerissa Lemon
 * @since: Jan 6, 2015
 */
var libs = libs || {};
google.load('visualization', '1', {packages: ['corechart']});

google.setOnLoadCallback(vizInit);
// Define the variables to hold the entire fusion table,
// and a collection of views, one for each year.
var data;
var views = {};
var totals = {};
// Define the variable to hold the chart.
var chart;

var year = [2014, 2015]; //adding this in. can be deleted.

//var year = 2014;

// Set the options for the chart to be drawn.  This include the
// width, height, title, horizontal axis, vertical axis.  Finally
// turn off the legend.
var options = {
    width: 700,
    height: 400,
    title: 'Number of Students Reached by Course Level',
    hAxis: {
	title: 'Course Level',
	gridlines: {count: 5}
    },
    vAxis: {
	title: 'Number of Students Reached'
    },
    legend: {
	position: 'center'
    }
};



function vizInit() {
    // Create a new viz object using the google API -- specifically,
    // we are going to make a column chart inside the div called ex0
    // in the html file.
    chart = new google.visualization.ColumnChart(document.getElementById('ex0'));


    // 9/19/2015 Corrected typo
    // Make the initial query to get the whole Fusion table. The Fusion
    // table’s ID is listed in red.
    //var query = "SELECT Year, AY, Course Level, Number of Students FROM 1b7tW8h_6l35B2Pj7DCwfjHjurWzRiI-KpuvHnOgb";
    var query = "SELECT * FROM 1b7tW8h_6l35B2Pj7DCwfjHjurWzRiI-KpuvHnOgb";

    var opts = {sendMethod: 'auto'};
    var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);


    // Send the query and handle the response by logging the data
    // to the console.
    queryObj.setQuery(query);
    queryObj.send(function(e) {

	    data = e.getDataTable();

	    console.log("Data: " + data);

	    // Create a view for academic year 2013-2014 that
	    // is the first two columns of the data, just the
	    // rows that have 2013-2014 for the value.

	    // First, get the textualized range of the year.
	    var thisYear = "" + year[0] + "-" + year[1];



	    // Next, create the object and get the rows
	    // corresponding to "thisYear".
	    views[thisYear] = new google.visualization.DataView(data);


	    views[thisYear].setRows(views[thisYear].getFilteredRows([{column: 1, value: thisYear}]));


	    // Get a subset of the columns.
	    views[thisYear].setColumns([2, 3]);

	    // Draw the chart for the initial academic year.
	    chart.draw(views[thisYear].toDataTable(), options);

	});
}

function vizController(thisYear) {

		//if view[thisYear] doesn't exist, create a
		//dataView object to get the subset of data for the year
		if((views[thisYear]) == null){
		// Next, create the object and get the rows
		// corresponding to "thisYear".
		views[thisYear] = new google.visualization.DataView(data);

		views[thisYear].setRows(views[thisYear].getFilteredRows([{column: 1, value: thisYear}]));

		// Get a subset of the columns.
		views[thisYear].setColumns([2, 3]);
		}

    console.log("Views[thisYear] : " + views[thisYear].value);  
    // Draw the chart for the academic year.
	chart.draw(views[thisYear].toDataTable(), options);
    console.log(thisYear);


}
