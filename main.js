var cVar = require('./config.json');
var config = exports;
config.get = function (mName, key) {
    if (typeof mName == 'undefined') {
        return;
    } else if (typeof cVar[mName] == 'undefined') {
        return;
    } else {
        if (typeof key != 'undefined') {
            return cVar[mName][key];
        } else {
            return cVar[mName];
        }
    }
};
