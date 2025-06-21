let a = prompt("enter first number")
let b = prompt("enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)            // let sum = a+b // here a and b works as a string so it perform concat instead of addition 

function main(){

    let x = 1
    try {
        console.log("the sum is " + sum * x);  // here if x is defined then no error found
    return true;

} catch (error) {
    console.log("error aa gaya bhai");
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);
    return false;
}
finally {
    console.log("files are closed");
    
}
}

main ()

// finally ka use function ke andar hoga tabhi ye kaam karega
// ye return ke baad ka bhi statement ko run kara deta hai


