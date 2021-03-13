var data = require('../data.json');

exports.getSize = function(request, response){
    response.json({size: data.tasks.length});
}

exports.deleteTask = function(request, response){
    delete(data.tasks[request.params.id]);
    response.render('index', data);
    console.log(data);
}
