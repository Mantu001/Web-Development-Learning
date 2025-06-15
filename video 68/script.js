console.log("aur kaise ho fir se wapas aakar DOM me");

// let a = document.getElementsByClassName("box")
// console.log(a);
// a[3].style.backgroundColor = "red";
// a[3].style.color = "white";
// a[2].style.backgroundColor = "yellow";


document.querySelectorAll(".box").forEach ( (e) => {
    e.style.backgroundColor = "red"
})
