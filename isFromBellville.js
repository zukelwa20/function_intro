const assert = require('assert');
var isFromBellville = function(bellville){
registrationPlate = bellville.startsWith('cy');
return registrationPlate;
}
console.log(isFromBellville('cy2365476'));
assert.require(isFromBellville('cy 2365476',true));
