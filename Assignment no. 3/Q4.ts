/* Q4 - Write a program that calculates the discount for a product based on its price.
If the price is above $100,
apply a 10% discount; otherwise, apply a 5% discount. */

var price:number=92
var disc1:number=price*10/100
var disc2:number=price*5/100
if (price>100) 
{
    console.log("Total price after 10% discount is,",price-disc1)
} 
else 
{
    console.log("Total price after 5% discount is $",price-disc2)    
}

