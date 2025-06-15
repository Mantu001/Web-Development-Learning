console.log("hello world!");

// console.log(document.container.childNodes);
// console.log(typeof.window);
// document.getElementById("box1").style.backgroundColor = "red";
// document.getElementsByClassName('box').style.backgroundColor = "aqua"

let boxes = document.getElementsByClassName("box");
for (let i=0; i<boxes.length; i++){
    if (i%2 == 0){
        boxes[i].style.backgroundColor = "yellow";
    }
    else{
        boxes[i].style.backgroundColor = "aqua";
    }
   
} 

