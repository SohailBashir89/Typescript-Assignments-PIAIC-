"use strict";
/* Q1 - Create a function that takes an array, an index, and a value as parameters.
Inside the function, use the splice method to insert the value at the specified index in the array.
Return the modified array.*/
let studeNames = ["Ali", "Asif", "Anam", "Maheen"];
function takeValueInarray(index1, index2, studentName) {
    studeNames.splice(index1, index2, studentName);
    return studeNames;
}
var newArray = takeValueInarray(2, 0, "Shoaib");
console.log("Name of All students including New Comer");
console.log(newArray);
