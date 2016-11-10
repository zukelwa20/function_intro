const assert = require('assert');
var isFrom = function(regNum,location){
var results = regNum.startsWith(location);
return results;
}
console.log(isFrom("CA 456789","CA"));
console.log(isFrom("ND 123456","NA"));
assert.equal(isFrom("CA 456789","CA"),true);
