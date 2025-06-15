// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

console.log("hey");
// let button = document.getElementById("btn");
// button.addEventListener("click", ()=>{
//     let boxes = document.getElementById("box1");
//     boxes.innerHTML = "now this is clicked box"
// })

// button.addEventListener("contextmenu", () => {
//     alert("you are hacked")
// })

let browser = document.querySelector("body")
// browser.addEventListener("click", (e)=>{
//     document.querySelector("body").style.backgroundColor = "red";
//     console.log(e);
// })
// console.log("change the color of browser to red by change any random key on keyboard");

browser.addEventListener("keydown", (e)=>{
    console.log(e.key);
    if (e.key == "r"){
        document.querySelector("body").style.backgroundColor = "red";
        alert("Congratulation!")
    }
    else {
        alert("Naah! Try again")
    }
}) 





// // Self Practice
// let i = 0;
// let button = document.getElementById("btn")
// button.addEventListener("mouseover", (g)=> {
//     // console.log(g);
//     console.log("mouse is clicked");
//     if (i%2 == 0){
//         document.getElementById("box1").innerHTML = "i am clicked"
//     }else{
//         document.getElementById("box1").innerHTML = "Hey i am a box"
//     }
//     i++;
// })

// button.addEventListener("click", (g)=> {
//     console.log("mouse is clicked");
//     console.log(g);
//     alert("i was clicked");
// })

// document.body.addEventListener("contextmenu", ()=> {
//     console.log("body is clicked");
//     alert ("you were hacked");
// })
