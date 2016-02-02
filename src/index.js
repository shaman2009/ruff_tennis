'use strict';
var button1 = 'button-k2';
var button2 = 'button-k3';

var Tennis = require('./tennis');

var tennis = new Tennis();

$.ready(function () {
    $('lcd').print('Love All');
    
    $(button1).on('push', function() {
        tennis.addSenderScore();
        $('lcd').clear();
        $('lcd').print(tennis.currentScore());
    });
});

$.end(function() {});
