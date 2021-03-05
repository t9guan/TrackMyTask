$(document).ready(function() {
	initializePage();
})
function initializePage(){
    $.get('/report/chart', serverResponse)
}
function serverResponse(data){
    console.log(data);
    var i;
    let chartData = [];
    for (i = 0; i<data.tasks.length; i++){
        chartData.push({x: data.tasks[i].name, value: data.tasks[i].timetaken});
    }

    var chart = new CanvasJS.Chart("chartContainer",
	{
		title:{
			
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			legendText: "{indexLabel}",
			dataPoints: chartData
		}
		]
	});
	chart.render();
}