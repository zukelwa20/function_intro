const assert = require('assert');
var check = function(day){
var isWeekday =  day.endsWith('day');
console.log(isWeekday);
}
console.log(check('monday'));
assert.equal(true,true);
