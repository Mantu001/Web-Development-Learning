console.log("hello")

function randomColor (){
    let hexCode = '0123456789ABCDE'
    let colCode = '#'
    for (let i=0; i<6; i++){
        colCode += hexCode[Math.floor(Math.random()*15)];
    }
    return colCode;
}


let boxes = document.querySelectorAll(".box")
for (let i=0; i<boxes.length; i++){
    boxes[i].style.backgroundColor = randomColor();
    boxes[i].style.color = randomColor();
    console.log(randomColor());
}
