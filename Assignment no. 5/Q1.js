"use strict";
/* Q1 - Develop a program that calculates and prints
the sum of the first n even numbers using a for loop. */
function sumOfFirstNEvenNumbers(n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        var evenNumber = i * 2;
        sum += evenNumber;
    }
    return sum;
}
var n = 6;
var result = sumOfFirstNEvenNumbers(n);
console.log("Sum of the first", n, "even numbers is:", result);
