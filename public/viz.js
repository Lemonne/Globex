/*
 * viz.js
 *
 * Defines:
 * - The data to be visualized in the chart.
 * - The options for the look of the chart to be drawn.
 * - How to draw the chart.
 *
 * @author: Globex
 * @since: Jan 6, 2015
 */

google.load('visualization', '1', {packages: ['corechart']});

google.setOnLoadCallback(drawChart);

function drawChart() {

    // STEP 3: STORE THE DATA.

    // Store the data by creating a google DataTable object with
    // two columns: Month and People Hours.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Course Level');
    data.addColumn('number', 'Number of Students');

    // Add 12 rows to the DataTable, January - December of
    // 2014.
    data.addRows([
        ['100', 1760],
        ['200', 2120],
        ['300', 698],
        ['400', 480],
        ['500', 202],
      ]);

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
	    position: 'none' 
	}
    };

    // Create a new viz object using the google API -- specifically,
    // we are going to make a column chart inside the div called ex0
    // in the html file.
    var chart = new google.visualization.ColumnChart(document.getElementById('ex0'));

    // STEP 7: SHOW THE DATA
    // Draw the chart with the supplied options.
    chart.draw(data, options);
}
