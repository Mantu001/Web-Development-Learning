console.log("hey js is ongoing");

var a = 5;
var b = 6;
var c = "Mantu"
console.log( a + b + 5 + c);

console.log(typeof(a), typeof(b), typeof(c));

const a1 = 6;
console.log("performing const " + a1);
// a1 = a1 + 5;
// console.log("changing const value " + a1); //not possible

var b1 = 5;
console.log("performing var " + b1);
b1 = b1 + 3;
console.log("changing var value "+ b1);
//var perform changes

let c1 = 8;
console.log("performing let "+ c1);
c1 = c1 + 7;
console.log("changing let value " + c1);
// console.log(c1); let is also perform changes

let x = "mantu";
let y = 22;
let z = 34.54;
const p = true;
let q = undefined;
let r = null;
console.log(p,q,r,x,y,z);
console.log(typeof p,typeof q,typeof r,typeof x,typeof y,typeof z);

let obj = {
    "name" : "Mantu",
    "roll" : "2200971640031",
    "roll" : 2200971640031
}
console.log(obj);
obj.salary = "1 crore";
console.log(obj);