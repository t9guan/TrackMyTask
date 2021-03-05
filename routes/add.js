var data = require('../data.json');
let index = 7;

exports.view = function(request, response){
    response.render('add', data);
}

exports.addTask = function(request, response){
    let newTask = {
        "index": index,
        "name": request.query.taskName,
        "time": request.query.startTime,
        "endtime": "-----",
        "timetaken": "-----"
    }
    
    data.tasks.push(newTask);
    index = index + 1;
    console.log(data);
    response.render('index', data);
}