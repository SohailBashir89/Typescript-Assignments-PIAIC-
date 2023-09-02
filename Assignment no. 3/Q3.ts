/* Q3 - Write a program that converts given number of days into weeks and days
such as 17 days = 2 weeks and 3 days. */

var num1:number=42
var weeks:number=num1/7
var roundWeeks:number=Math.floor(weeks)
var days:number=num1%7

console.log("42 Days have");
console.log(roundWeeks,"weeks and",days,"Days");

