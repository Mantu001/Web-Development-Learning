// // example 1 
// let obj = {
//     a : 1, 
//     b : "Mantu"
// }
// console.log(obj);


// // Example 2
// let animal = {
//     food : "Herbivorus",
//     live : "jungle"
// }
// let goat = {
//     legs : 4,
//     pet : true,
//     eat : "Ha jaroor"
// }
// goat.__proto__ = animal // __proto__ this is used to inherit property from animal without using OOPS
// console.log(goat);


// Example 3  (doubt in constructor)
class Animal {
    constructor(name){
        this.name = name
        console.log("Object is Created");
    }
    eats(){
        console.log("Kha raha hoo");
    }
    jumps(){
        console.log("khood raha hoo");
    }
}
class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created and he is a lion");
    }
    eats(){
        super.eats() // iske help se dono inherit hoga
        console.log("kha raha hoo roar");
        
    }
}
let a = new Animal("Bunny");
console.log(a);
let l = new Lion("King")
console.log(l);


