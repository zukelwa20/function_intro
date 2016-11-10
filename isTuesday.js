const assert = require("assert");
var isTuesday = function(day){
  var today = day.startsWith("tuesday");
  return today;
}
console.log(isTuesday("tuesday"));
assert.equal(isTuesday("tuesday",false));
