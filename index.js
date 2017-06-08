var setDifference = require('./node_modules/kush/set-difference');
var setIntersection = require('./node_modules/kush/set-intersection');

var set1 = ['dogs', 'cats', 'red', 'bananas', 'code', 'movies'];
var set2 = ['blue', 'horses', 'dogs', 'code', 'rain'];

var difference = setDifference(set1, set2);
var intersection = setIntersection(set1, set2);

console.log('intersection ' + intersection);
console.log('difference ' + difference);