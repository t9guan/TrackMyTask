var data = require('../data.json');

exports.view = function(request, response){
    response.render('report', data);
}

exports.chart = function(request, response){
    let chartdata = [['Task', 'TimeTaken']];
    var i;
    for(i = 0; i < data.tasks.length; i++){
        var time
        if(data.tasks[i] != null){
            if(data.tasks[i].timetaken == '-----'){
                time = 0;
            }else{
                time = parseInt(data.tasks[i].timetaken);
            }
            chartdata.push([data.tasks[i].name, time]);
        }
    }
    response.json(chartdata);
}