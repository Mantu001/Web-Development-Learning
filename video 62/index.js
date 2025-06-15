/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
let Adjective = {
    0 : "Crazy",
    1 : "Amazing",
    2 : "Fire"
}
let ShopName = {
    0 : "Engine",
    1 : "Food",
    2 : "Garments"
}
let AnotherWord = {
    0 : "Bros",
    1 : "Limited",
    2 : "Hub"
}
let a = prompt("Do You want to Generate Your Business Name Enter 1 for yes and 0 for no");
if (1){
let x = Math.floor(Math.random()*20%3);
let y = Math.floor(Math.random()*20%3);
let z = Math.floor(Math.random()*20%3);

console.log("first word is : " + x)
console.log("second word is : " + y)
console.log("third word is : " + z)

console.log(`The name of Business is ${Adjective[x]} ${ShopName[y]} ${AnotherWord[z]}}`);
}
else{
    console.log("Thank You for visiting the page");
}