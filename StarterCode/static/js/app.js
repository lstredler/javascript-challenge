// from data.js
var tableData = data;

// grab references to the input element and the output div
//write code that appends a table to your web page 
//and then adds new rows of data for each UFO sighting.
//column for date/time, city, state, country, shape, comment

//button select 
var tbody = d3.select("tbody");
console.log(data);
var button = d3.select("#button");
var cityInput = d3.select("#city")
var stateInput = d3.select("#state");
var countryInput = d3.select("#country")
var shapeInput = d3.select("#shape")


var inputFieldDate = d3.select("#datetime");
var $filerBtn = d3.select("#filter-btn");

var columns = ["date/time", "city", "state", "country", "shape", "comment"]

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings =>{
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column]))
    })
}

addData(tableData); 