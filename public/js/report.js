$(document).ready(function() {
	initializePage();
})
function initializePage(){
    $.get('/report/chart', serverResponse)
}
function serverResponse(data){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    console.log(data);
    

function drawChart() {
    var i;
    let chartData = [];
    for (i = 0; i<data.tasks.length; i++){
        chartData.push({x: data.tasks[i].name, value: data.tasks[i].timetaken});
    }

    var thing = google.visualization.arrayToDataTable(chartData);
    var chart = new google.visualization.PieChart(document.getElementById('chartContainer'));
  chart.draw(chartData);
}
}