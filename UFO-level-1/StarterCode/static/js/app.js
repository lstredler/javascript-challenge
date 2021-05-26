// from data.js
var tableData = data;

// grab references to the input element and the output div
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var datetimeInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");
var durationMinutesInput = d3.select("#durationMinutes");
var comments = d3.select("#comments");
//column for date/time, city, state, country, shape, comment
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

//data to html 
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings =>{
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column]))
    })
}
addData(tableData); 

//prevent refresh 
d3.event.preventDefault();

//button
d3.selectAll("button").on("click", function() {
    console.log(dataInput);
  });
  
  d3.selectAll("li").on("click", function() {
    var listItem = d3.select(dataInput);
  
    var listItemText = listItem.text();
    console.log(listItemText);
  });
  

renderTable();