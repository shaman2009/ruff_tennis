var assert = require('assert');
var path = require('path');
var test = require('test');

var appPath = path.join(__dirname, '..');
var Tennis = require(path.join(appPath, 'src', 'tennis'));

module.exports = {
    'test should love all after construction' : function() {
        var tennis = new Tennis();
        assert.equal('Love All', tennis.currentScore());
    },
    
    'test should fifteen love for sender score' : function() {
        var tennis = new Tennis();
        tennis.addSenderScore();
        assert.equal('Fifteen Love', tennis.currentScore());
    }
};

test.run(module.exports);