/*
Global JavaScript Objects (homework)
Math
● Random
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it.
*/
function randomNumbersInRange(){
    var output = [];
    for(var i = 0; i < 10; i++){
        output[i] = Math.random()*(50 - 1) + 1;
    }
    console.log(output);
    return output;
}
var arr = randomNumbersInRange();

/*
● Round
Create a function that uses the passed array of numbers and rounds all its
elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.
*/
function roundArray (arr){
    var output = [];
    for (var i = 0; i < arr.length; i++){
        output[i] = parseFloat(arr[i].toFixed(2));
    }
    console.log(output);
}
roundArray(arr);

/*
● Floor
Create a function that uses the passed array of numbers and rounds all its
elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
*/
function roundToInteger (arr){
    var output = [];
    for (var i = 0; i < arr.length; i++){
        output[i] = Math.floor(arr[i]);
    }
    console.log(output);
}
roundToInteger(arr);

/*
● Max
Create a function that finds and prints out the biggest element in the passed
array of numbers.
*/
function findMaxValue (arr){
    var max = Math.max(...arr);
    console.log(max);
}
findMaxValue(arr);

/*
Date
● Print out the whole date object in the console.

● Print out the current time in the console.
● Print out the current date in the console.
*/
