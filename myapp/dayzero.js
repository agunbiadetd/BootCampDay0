'use strict'
module.exports = {

findMinMax: function(numArray){
var minMax =[];
var minValue = Math.min.apply(null,numArray);
var maxValue = Math.max.apply(null,numArray);
if(minValue == maxValue) {
	minMax[0] = minValue;
}
else{
	minMax[0]=minValue;
	minMax[1]=maxValue;
}
return minMax;
},


fizzBuzz: function(number) {
if (number % 15 == 0) {
	return 'FizzBuzz';
} else if (number % 5 == 0){
 	return 'Buzz';
 }
 else if (number % 3 == 0 ) {
 	return 'Fizz'; 
}
 else {
 	return number; 
 }
}, 


aritGeo: function (inputArray) {
	if(inputArray.length >= 3) {
var d = inputArray [1] - inputArray [0];
var r = inputArray[1] - inputArray[0];
var i = 2;
var returnValue1 = 'Arithmetic';
var returnValue2 = "Geometric"
while (i < inputArray.length) {
if (inputArray[i] - inputArray[i-1] !== d){
  return returnValue2;
}
else if(i++ == inputArray.length - 1) {
	return returnValue1;
}
  i = 2;
}
while (i < inputArray.length) {
	if (inputArray[i] / inputArray[i - 1] !== r) {
		return -1;
}
else if (i++ == inputArray.length -1) { 
return returnValue1;
}
}
}else if (inputArray.length === 0) {
	return 0;
}
else { 
	return - 1;
}
}