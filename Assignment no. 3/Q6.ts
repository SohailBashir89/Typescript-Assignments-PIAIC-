/* Q6 - Write a program that takes temperature and check it.
If it is cold then suggest the user to wear warm clothes and so on according to the weather. */

var tempr:number=22
if (tempr>=35) 
{
    console.log("Very Hot. Avoid Outdoor Activities")    
}
else if (tempr<35 && tempr>=25)
{
    console.log("Warm. Use Loose Outfit")
}
else if (tempr<25 && tempr>=18)
{
    console.log("A Pleasent Day")
}
else if (tempr<18 && tempr>=15)
{
    console.log("Its Cold Outside, Wear Warm Clothes")
}
else 
{
    console.log("Freezing Cold. Avoid Outdoor Activities")
}

