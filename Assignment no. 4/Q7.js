"use strict";
/* Q7 - Create a function that takes an array of numbers as parameter.
Use a while loop to calculate and return the sum of all the numbers in the array. */
var arrayofsum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var totalsum = 0;
var index = 0;
while (index < arrayofsum.length) {
    totalsum = totalsum + arrayofsum[index];
    index++;
}
console.log(totalsum);
