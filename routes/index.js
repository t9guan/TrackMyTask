
/*
 * GET home page.
 */

var data = require('../data.json');

exports.view = function(request, response){
    response.render('index', data);
}
