"use strict";
// Q1 - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
var temp = 98.6;
var cels = (temp - 32) * 5 / 9;
console.log("The temprature in celsiusis is", cels);
var faranH = (temp * 5 / 9) + 32;
console.log("The temprature in Faranhite is", faranH);
