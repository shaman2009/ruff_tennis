var Tennis = function() {
    
};

var currentScore = 'Love All';

Tennis.prototype.addSenderScore = function() {
    currentScore = 'Fifteen Love';
};

Tennis.prototype.currentScore = function() {
    return currentScore; 
};

module.exports = Tennis;
// exports.tennis = new Tennis;