var data = require('../data.json');

exports.view = function(request, response){
    response.json({size: data.tasks.length});
}
