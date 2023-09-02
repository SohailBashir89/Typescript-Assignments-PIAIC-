"use strict";
/* Q7 - Write a program that checks if the given number is divisible by 3 or 5 or both
or not divisible by anyone show output accordingly. */
var num = 22;
if (num % 3 == 0 && num % 5 == 0) {
    console.log("The given number is divisible by 5 and 3 both");
}
else if (num % 3 == 0 && num % 5 != 0) {
    console.log("The given number is divisible by 3");
}
else if (num % 3 != 0 && num % 5 == 0) {
    console.log("The given number is divisible by 5");
}
else
    console.log("The given number is not divisible by 3 nor 5");
