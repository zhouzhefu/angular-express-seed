var dataService = require('../models/dataRepo');
var SUCC_OPT = {optState: 'success'},
    FAIL_OPT = {optState: 'failure'};
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index');
};


exports.route = function(app) {
    app.get('/partials/:name', partials);

    app.get('/resource/appInfo/:identifier', appInfoHandler);
    app.get('/resource/case/:identifier', caseHandler);
    app.delete('/resource/case/:identifier', caseDeleteHandler);
    app.post('/resource/case', caseAddHandler);

};


var partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};


var appInfoHandler = function(req, res) {
    var identifier = req.params['identifier'];
    console.log('Identifier = ' + identifier);
    if (identifier == 'default')
        res.json({name: 'Baby File System'});

};

var caseHandler = function(req, res) {
    var identifier = req.params.identifier;
    if (identifier == 'all') {
        var ret = dataService.getAllCases();
        console.log(ret);
        res.json(ret);
    } else if (!isNaN(identifier)) {
        console.log('identifier is: ' + identifier);
        var ret = dataService.getCaseById(identifier);
        console.log('result is: ' + ret);
        res.json(ret);
    } else {
        res.json([]);
    }
};


var caseDeleteHandler = function(req, res) {
    var identifier = req.params.identifier;
    if (!isNaN(identifier)) {
        dataService.deleteCase(identifier);
        res.json(SUCC_OPT);
    } else {
        res.json(FAIL_OPT);
    }
}

var caseAddHandler = function(req, res) {
    var newCase = req.body;
    try {
        dataService.addCase(newCase);
        res.json(SUCC_OPT);
    } catch (error) {
        res.json(FAIL_OPT);
    }

}
