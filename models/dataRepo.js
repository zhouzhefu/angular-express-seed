var module = this;

var cases = [
    {caseId: 1, caseDesc: 'Guoguo\'s Files', kidsName: 'Guoguo', kidsAge: 3, UIN: 'T123456J'},
    {caseId: 2, caseDesc: 'Chengcheng\'s Files', kidsName: 'Chengcheng', kidsAge: 0, UIN: 'T765432J'}
];
exports.getAllCases = function() {
    return cases;
}

exports.getCaseById = function(caseId) {
    var ret = {};

    //search the cases
    for (theCase in cases) {
        //console.log('current case is: ' + cases[theCase]);
        if (cases[theCase].caseId == caseId) {
            console.log('found! ' + caseId);
            ret = cases[theCase];
            break;
        }
    }

    return ret;
}

exports.deleteCase = function(caseId) {
    var theCase = module.getCaseById(caseId);
    cases.splice(cases.indexOf(theCase), 1);
}

exports.addCase = function(newCase) {
    console.log('Going to add case: ');

    var newId = Number(Date.now());
    newCase.caseId = newId;
    console.log(newCase);
    cases.push(newCase);
}