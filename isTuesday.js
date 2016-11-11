const assert = require("assert");
var isTuesday = function(day){
  var today = day.startsWith("t");
  return today;
}
console.log(isTuesday("tuesday"));
assert.equal(isTuesday("tuesday",true));
