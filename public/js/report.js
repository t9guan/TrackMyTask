let chartdata
$(document).ready(function() {
	initializePage();
})
function initializePage(){
    $.get('/report/chart', serverResponse)
}
function serverResponse(data){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    chartdata = data;
    console.log(data);
}

function drawChart(){
    console.log(chartdata);
    var data = google.visualization.arrayToDataTable(chartdata);
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    var options = {
        backgroundColor: 'transparent'
    };
    chart.draw(data, options);
}