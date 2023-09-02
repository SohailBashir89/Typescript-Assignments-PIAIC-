"use strict";
/*  Q2 - Implement a program that uses a for loop to iterate through
an array of numbers and print only the even numbers. */
function printEvenNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        var currentNumber = numbers[i];
        if (currentNumber % 2 === 0) {
            console.log(currentNumber);
        }
    }
}
// Example usage:
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers in the array:");
printEvenNumbers(numberArray);
