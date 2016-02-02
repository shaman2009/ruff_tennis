var assert = require('assert');
var path = require('path');
var test = require('test');

var appRunner = require('ruff-app-runner');
var mock = require('ruff-mock');

var verify = mock.verify;

var appPath = path.join(__dirname, '..');

var button1 = 'button-k2';
var button2 = 'button-k3';

var tennisMock = mock.anyMock();

module.exports = {
    'test love All': function () {
        appRunner
            .run(appPath, function () {
                verify($('lcd')).print('Love All');
            }).end(function() {});
    },
    "test fifteen love": function() {
        appRunner
            .run(appPath, function () {
                $(button1).emit('push');
                verify($('lcd')).clear();
                verify($('lcd')).print('Fifteen Love');
                
            }).end(function() {});
    }
};

test.run(module.exports);
