const assert = require("assert");
var isFromGauteng = function(Gauteng){
  registrationPlate = Gauteng.startsWith("DR")
return registrationPlate;
}
console.log(isFromGauteng("DR 12 TY GP"));
assert.equal(isFromGauteng("DR 12 TY GP",true));
