"use strict";
/* Q3 - Write a program that converts given number of days into weeks and days
such as 17 days = 2 weeks and 3 days. */
var num1 = 42;
var weeks = num1 / 7;
var roundWeeks = Math.floor(weeks);
var days = num1 % 7;
console.log("42 Days have");
console.log(roundWeeks, "weeks and", days, "Days");
