var assert = require('assert')
var dayToday = function(){
var weekDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var today = new Date ();
return weekDays[today.getDay()];
 }
console.log(dayToday());
assert.equal(dayToday(),'monday');
