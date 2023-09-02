/* Q2 - Implement a simple shopping cart program using an array.
Create functions to add items, remove items, and update quantities using the splice method.
Print the cart's contents after each operation.*/

var shoppingCart:string[]=["Lipton","Bread","Milk","Jam", "Eggs"]
function changeInCart(index1:number,index2:number,item:string) 
{
    shoppingCart.splice(index1,index2,item)
    return shoppingCart
}
var updatedCart=changeInCart(shoppingCart.length,0,"Nescafe")
console.log("After Add an Item");
console.log(updatedCart)
console.log("-----------------------------------------------------------")
updatedCart.splice(updatedCart.length-1,1)
console.log("After Remove an Item");
console.log(updatedCart)
console.log("-----------------------------------------------------------")

