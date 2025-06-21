

// // IIFE (immediately invoke function expression)
// async function sleep(){
//     return new Promise((resolve, rejects)=> {
//         setTimeout(() => {
//             resolve (45)
//         }, 1000);
//     })
// }
// (async function main() {
//     let a = await sleep()
//     console.log(a);
//     let b = await sleep()
//     console.log(b);
// })()


// Destructuring  (it is used to extract some certain things from the group[obj or array])
// it is practically used so much mostly in react
async function sleep() {
    return new Promise ((resolve, rejects) => {
        setTimeout(() => {
            resolve (45)
        }, 1000);
    })
}
(async function main() {
    // let [x,y, ...rest] = [2,3,4,5,6,7,8] // ...rest is used to store all the remaining value
    // console.log(x,y,rest);
    
    let obj = {
        a : 1, 
        b : 2, 
        c : 3
    }
    let {a,b} = obj
    console.log(a,b);
    
    
})()
