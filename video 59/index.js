/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

    // Solution

let a = console.log(prompt("Enter the 1st number: "));
let b = console.log(prompt("Enter the 2nd number: "));
let random = Math.random();

if(random<0.1){
    console.log("Addition " + a-b);
}
else{
    console.log("Addition " + a+b);
}

// not solved

