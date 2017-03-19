// app/routes.js
// grab the nerd model we just created
var User = require('./models/user');
module.exports = function(app) {
    app.get('/api/', function(req, res) {
        res.json({});
    }).get('*', function (req, res) {
        res.sendfile('./public/index.html');
    })
};