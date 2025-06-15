// const { rejects } = require("assert");
// const { resolve } = require("path");

// console.log("this is a promise function paractice");
// let prom1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("issue is resolved");
//         resolve("Thank You")
//     }, 2000);
// })

// prom1.then((a)=>{
//     console.log(a);
// })

let prom2 = new Promise ((resolve, reject)=>{
    let a = Math.floor(Math.random()*10)
    console.log(a);
    if(a < 5){
        reject("Error please Try again")
    }
    else{
        setTimeout(() => {
            resolve("Success")
        }, 1000);
    }
})

prom2.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

let prom3 = new Promise ((resolve, reject)=>{
    let a = Math.floor(Math.random()*10)
    console.log(a);
    if(a < 5){
        reject("Error please Try again 3")
    }
    else{
        setTimeout(() => {
            resolve("Success 3")
        }, 1000);
    }
})

let p4 = Promise.all([prom2, prom3])
p4.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

console.log('hello');
