console.log("we are ready");
let boxes = document.getElementsByClassName("box");
// let boxes = document.querySelector(".container").children;  //this is same as upper line
// let color = boxes.style.color = "red";
// console.log(boxes);
// console.log(boxes.length);

function getRandomColor(){
    let val1 = Math.ceil(Math.random()*255);
    let val2 = Math.ceil(Math.random()*255);
    let val3 = Math.ceil(Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})