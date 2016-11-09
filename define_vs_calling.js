//execute this using define_vs_calling.js
//declaring a function name 
var theFunction = function(){
    console.log('this is the function executing');
}

//what does this print
console.log(theFunction);
// print type of function
console.log(typeof theFunction);

//to call the function
theFunction();

//only now 'this is the function' is printed out to the console
