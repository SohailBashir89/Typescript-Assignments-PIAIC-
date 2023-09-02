"use strict";
/* Q3 - Implement a program that uses a loop to iterate through an array of numbers and
remove all the even numbers from them and just leave the odd ones. */
function removeEvenNumbers(numbers) {
    // Use the filter method to create a new array with only odd numbers
    var oddNumbers = numbers.filter((number) => number % 2 !== 0);
    return oddNumbers;
}
// Example usage:
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbersArray = removeEvenNumbers(numberArray);
console.log("Array with Odd numbers:");
console.log(oddNumbersArray);
