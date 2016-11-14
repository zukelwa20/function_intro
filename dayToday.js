var assert = require('assert');
var dayToday = function(){
var today = new Date ();
 var check = today.getDay();
 console.log(check);
return check;
 }
dayToday('2016-11-14');
assert.equal(dayToday('2016-11-14'),1);
