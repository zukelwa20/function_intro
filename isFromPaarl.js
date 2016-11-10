const assert = require("assert");
var isFromPaarl = function(paarl){
  registrationPlate = paarl.startsWith("CJ");
return registrationPlate;
}
console.log(isFromPaarl("CJ789654"));
assert.equal(isFromPaarl("CJ789654",true));
