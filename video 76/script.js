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

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task 2 completed");
        }, 3000);
    })
}
async function main() {

    console.log('task1 process');
    console.log('task1 completed');
    console.log('task2 process');
    console.log('task2 loading data');
    // agar isme await nhi likhenge to iske baad wala sab task complete ho jayega aur isko pending me chor dega
    let data = await getData()
    console.log(data);
    console.log("task 3 process");
    console.log("task 3 completed");
}
main()


