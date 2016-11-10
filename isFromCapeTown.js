const assert = require('assert');
var isFromCapeTown = function(CapeTown) {
registrationPlate = CapeTown.startsWith("CA");
return registrationPlate;
}
console.log(isFromCapeTown("CA 541236"));
assert.equal(isFromCapeTown("CA541236",true));
