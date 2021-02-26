var data = require('../data.json');

exports.view = function(request, response){
    var index = request.params.index
    response.render('task', data.tasks[index]);
}