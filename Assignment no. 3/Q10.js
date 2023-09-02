"use strict";
/* Q10 - Write a program that takes the number of units consumed by a user,
if it is greater than 100 then add 10% tax,
if greater than 200 then add 15% of tax so on up to
if greater than 500 then add 25% of tax
where the tax amount will be calculated by the amount of bill. */
var unitsConsumed = 254;
var unitPrice = 40;
var billAmount = unitsConsumed * unitPrice;
var tax10 = (0.1 * billAmount);
var tax15 = (0.15 * billAmount);
var tax20 = (0.20 * billAmount);
var tax25 = (0.25 * billAmount);
var tax35 = (0.35 * billAmount);
if (unitsConsumed > 100 && unitsConsumed <= 200) {
    console.log("Bill Amount=", billAmount, "added 10% Tax is", (tax10), "Total Bill Amount including tax is =", billAmount + tax10);
}
else if (unitsConsumed > 200 && unitsConsumed <= 300) {
    console.log("Bill Amount=", billAmount, "added 15% Tax is", tax15, "Total Bill Amount including tax is =", billAmount + tax15);
}
else if (unitsConsumed > 300 && unitsConsumed <= 400) {
    console.log("Bill Amount=", billAmount, "added 20% Tax is", tax20, "Total Bill Amount including tax is =", billAmount + tax20);
}
else if (unitsConsumed > 400 && unitsConsumed <= 500) {
    console.log("Bill Amount=", billAmount, "added 25% Tax is", tax25, "Total Bill Amount including tax is =", billAmount + tax25);
}
else if (unitsConsumed > 500) {
    console.log("Bill Amount=", billAmount, "added 35% Tax is", tax35, "Total Bill Amount including tax is =", billAmount + tax35);
}
else {
    console.log("The Units Consumed are less than 100, Bill amount wihtout Tax is=", billAmount);
}
