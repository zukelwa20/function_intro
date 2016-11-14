var assert = require('assert');
function getDay(day){
var today = new Date();
var gDay = ['sunday','monday','wednesday','thursday','friday','saturday'];
return gDay[today.getDay()];
}
console.log(getDay());
assert.equal(getDay(),'monday');
