//in a file called function_intro.js

//print out variable details
var printDetails = function(value){
    console.log(value);
    console.log(typeof value);

    // not this function is NOT returning anything

    // NOTE this function is NOT returning anything
    return value;
}

printDetails('this is a string');
printDetails(100);
printDetails(false);
