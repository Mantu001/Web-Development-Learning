// const { resolve } = require("path");
// const { log } = require("console");

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

// console.log('Loding Module');
// console.log('do something else');
// console.log('load data');
// let data = getData();

// data.then((a) => {
//     console.log(a);
//     console.log('process data');
//     console.log("task 2");
// })
// console.log('task 3');

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("task 2 completed");
//         }, 3000);
//     })
// }
// async function main() {

//     console.log('task1 process');
//     console.log('task1 completed');
//     console.log('task2 process');
//     console.log('task2 loading data');
//     // agar isme await nhi likhenge to iske baad wala sab task complete ho jayega aur isko pending me chor dega
//     let data = await getData()
//     console.log(data);
//     console.log("task 3 process");
//     console.log("task 3 completed");
// }
// main()

/*********************************************************************************************** */

// Recode on (18 june 2025)

// // apporach 1 to use in place of async and await
// data.then ((v) => {    // isme jab tak data load nhi karega tab tak show nhi karega  
//     console.log(data);
//     console.log("process Data");
//     console.log("task 2");
// })

// async function getData(){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve (455)
//         }, 3000);
//     })
// }

async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.text() // it can show data in the form of text also we can use json instead of text
    console.log(x);
    console.log(data);
}

async function main() {
console.log("loading modules");
console.log("do something else");
console.log("load data");

let data = await getData()
console.log(data);
console.log("process Data");
console.log("task 2");
}
main()








