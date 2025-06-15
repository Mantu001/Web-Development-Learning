const { log } = require("console");

console.log("hey here we are learning about string");
let a = "mantu"
// console.log(a[2]);
for (let i=0; i<5; i++){
    console.log(a[i]);
}

let name = "mantu";
let friName = "rohan";
console.log("My name is " + name +" and my friend name is " + friName); // this is hectic 
// you can also write in this way also
console.log(`My name is ${name} and my friend name is ${friName}`);

let b = "Shivam"
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(2,4));
console.log(b.slice(2));
console.log(b.replace("rohan"));