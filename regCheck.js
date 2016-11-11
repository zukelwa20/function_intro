var assert = require('assert');
var regCheck = function(regNum,location){
var Check = regNum.startsWith(location);
return Check;
}
console.log(regCheck("GP 123456","GP"));
console.log(regCheck("L 456321","L"));
console.log(regCheck("EC 789654","EC"));
console.log(regCheck("MP 456987","MP"));
assert.equal(regCheck("GP 563114","GP"),true);
