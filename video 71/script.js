console.log("hello testing js file is properly linked or not");

let div = document.createElement("div")
div.innerHTML = "i have inserted <b> by mantu </b>"
div.setAttribute ("class", "created")
div.setAttribute ("id", "testing")
document.querySelector(".container").append(div) // ye container ke ander hi create ho jayega