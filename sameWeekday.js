var assert = require('assert');
var sameWeekday = function(date1,date2){
  var d1 = new Date(date1);
  var d2 = new Date(date2);
  return d1.getDay() == d2.getDay();
}
console.log(sameWeekday('2016-11-14','2016-11-21'));
assert.equal(sameWeekday('2016-11-14','2016-11-21'),true);
