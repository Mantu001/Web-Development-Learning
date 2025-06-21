console.log("Hacking Stimulator practice by myself");
let time = Math.floor(Math.random() * 7)
console.log(time);

function printScreen (message){
    document.getElementById("output").innerHTML += message + "<br>";
}

setTimeout(() => {
    printScreen("Initializing Hacking");
}, 1000);

setTimeout(() => {
    printScreen("Reading your files");
}, 200);

setTimeout(() => {
        printScreen("Password file detected");
}, 3000);

setTimeout(() => {
    printScreen("all Password sended");
}, 4000);

setTimeout(() => {
    printScreen("Hacked!");
}, 5000);
