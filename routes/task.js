var data = require('../data.json');
let id;
exports.view = function(request, response){
    var index = request.params.index;
    id = index;
    response.render('task', data.tasks[index]);
}

exports.id = function(request, response){
    data.tasks[request.params.id].endtime = request.params.endTime;
    data.tasks[request.params.id].timetaken = request.params.timeTaken;

    response.render('task', data.tasks[index]);
}
