"use strict";
/* Q5 - Create a program that determines the category of a user-provided age.
If the age is between 0 and 12, print "Child",
if it's between 13 and 19, print "Teenager" otherwise print "Adult." */
var age = 21.9;
if (age >= 0 && age <= 12) {
    console.log("Child");
}
else if (age > 12 && age <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
