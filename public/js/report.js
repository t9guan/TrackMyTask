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
        backgroundColor: 'transparent',
        legend: {position: 'bottom'},
        width: 400,
        height: 400,
        fontSize: 14,
        chartArea:{
            height:200,
            width:200,
            left:88,
            top: 50,
        }
    };
    chart.draw(data, options);
}