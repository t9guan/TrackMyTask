var data = require('../data.json');

exports.view = function(request, response){
    response.render('report', data);
}

exports.chart = function(request, response){
    response.json(data);
}