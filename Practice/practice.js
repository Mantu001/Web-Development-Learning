// let info = {
//     Name : "Mantu kr Tiwari",
//     Phone : "9973921506",
//     Marks : "94%"
// }
// console.log("hello kaise ho");
// console.log(info.Name, info.Phone, info.Marks);
// console.log(info.Name.toLowerCase());
// console.log(info.Name);
// console.log(Object.keys(info));  //isme keys print hoga
// console.log(Object.values(info));  //isme value print hoga
// let a = Object.keys(info);        
// console.log(a.length);         
// console.log(info.Name.length);

// const { log } = require("console");


// let nam = "45"
// let result = parseInt(nam) + 45
// console.log(result);
// console.log(typeof(result));
// console.log(typeof(nam));


// var obj = {
//     key : "phone",
// }
// console.log(obj.key);
// obj.key = "new phone";
// console.log(obj.key);
// obj.model = "Motorola";
// obj.price = "31999";
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));


// // Anotnyms dictionary
// let dictionary = {
//     idle : "Busy",
//     strong : "Weak",
//     all : "none",
//     dry : "wet",
//     cold : "hot"
// }
// console.log(dictionary);
// console.log(Object.keys(dictionary));
// console.log(Object.values(dictionary));


// // Ternary operations
// let a = 4;
// (a > 30) ? console.log("sahi hai") : console.log("na na galat hai");


// let age = 6;
// if (age>=0 && age<10){
//     console.log("Age is under 10 ");
// }
// else {
//     console.log("Age is over 10");
// }


// Switch Case Statement


// // Check if number is divisible by 2 and 3 
// let a = prompt("Enter the number");
// if (a%2 == 0){
//     console.log("Number is divisible by 2");
// }
// else if (a%3 == 0){
//     console.log("Number is divisible by 3");
// }
// else {
//     console.log("Number is not divisible by 2 and 3");
// }

// // using ternary operator
// let age = 26;
// ((age > 0) && (age <= 18)) ? console.log("you can't drive") : console.log("you can drive");


// //for loop
// for (let i = 0; i<10; i++){
//     console.log(i);
// }

// for in loop
// let details = {
//     CompanyName : "DesignWithMantu",
//     Owner : "Mantu",
//     Age : "20",
// }
// for (const x in details) {
//     console.log(x, details[x]);
// }

// // for off loop is desinged mainly for array while for in loop is designed for object
// let arr = ["DesignWithMantu", "Mantu", "20"]
// for (const x of arr) {
//     console.log(x);  
// }

// //marks of students
// let marks = {
//     maths: "23",
//     electronics: "78",
//     dsa: "99"
// };
// // let key = Object.keys(marks);
// // for (let i = 0; i < key.length; i++) {
// //     console.log(marks[key[i]]);
// // }
// for (const x in marks) {
//     console.log(marks[x]);
// }


// let mean = (num1, num2, num3, num4, num5) => {
//     console.log((num1+num2+num3+num4+num5)/5);
// }
// mean(2,2,3,4,5)

// let Name = "mantu"
// let newName = Name.replace("mantu","Designer")
// let jogar = 'mantua'
// let namwa = `ka re`
// let num  = `e number "44" ha nu`
// console.log(Name);
// console.log(Name.length);
// console.log(jogar);
// console.log(namwa);
// console.log(num);
// let nam = 'adam\'d angalo'
// console.log(nam);
// console.log(newName);

// let name1 = "Mantu "
// let name2 = "Tiwari"
// console.log(name1.concat( name2));

// console.log("har\"".length);
// let name1 = "Mantu kr Tiwari "
// let result1 = name1.startsWith("Mantu kr Tiwari")
// let result2 = name1.endsWith("Tiwari ")
// console.log(result1, result2);
// console.log(name1.toLowerCase());

// let a = "please give me rs 1800"
// console.log(a);

// function myfunc(a,b){
//     console.log("adding the value");
//     return a+b;
// }
// // myfunc();
// console.log(myfunc(2,8));

// let name1 = [
//     "Mantu", "Abhinav", "Abhishek"
// ]
// console.log(name1[0]);
// console.log(name1[1]);
// console.log(name1[2]);
// console.log(name1.length);
// name1[1] = "ka re"
// console.log(name1[1]);
// console.log(name1.join(","));


// let num1 = [
//     1,2,3,"Mantu"
// ]
// let num2 = [
//     4,5,6,"Kumar"
// ]
// let num3 = [
//     7,8,9,"Tiwari"
// ]
// // console.log(num1);
// // console.log(num2);
// // console.log(num1.concat(num2,num3));
// // console.log(num1.splice(2,1,45));
// // for(let i=0; i<num1.length; i++){
// //     console.log(num1[i]);
// // }
// num1.forEach(function(e) {
//     console.log(e);
// });

// let a = alert("hello kaise ho")
// console.log(a);
// let a = alert("hello kaise ho")
// console.log("sahi hai" + a);
// let b = prompt("ye prompt hai isme user input dega")
// console.log(b);
// let c = confirm("are you sure want to cancel")
// console.log(c);
// document.body.style.backgroundColor = "green"
// document.body.style.color = "white"

// let age = prompt("Enter the Age: ")
// console.log(age);
// if (age>=18){
//     console.log(alert("Congratulation you are elegible for driving"));
// }
// else {
//     console.log(alert("Sorry you are not elegible"));
// }
// if(age<0){
//     console.log(alert("Entered age is invalid"));
//     console.error("Entered age is invalid")
// }
// let ok = confirm("If you want to see the prompt again")
// if(ok){
//     if (age>=18){
//         console.log(alert("Congratulation you are elegible for driving"));
//     }
//     else{
//         console.log(alert("Sorry you are not elegible"));
//     }
// }

// let input = prompt("Enter the value: ")
// console.log(input);
// if (input > 4){
//     window.location.href = "http://www.googel.com"
//     console.log("page is redirected to google.com");
// }

// let color = prompt("Enter the BackgroundColor : RED,YELLOW,BLUE: ")
// if (color == "RED"){
//     console.log(document.body.style.backgroundColor = "red");
// }
// else if (color == "YELLOW"){
//     console.log(document.body.style.backgroundColor = "yellow");
// }
// else if (color == "BLUE"){
//     console.log(document.body.style.backgroundColor = "blue");
// }

// console.log(Math.floor(Math.random()*16));

// let a = function(x,y){
//     return x*y;
// }
// let m = a(5,5)
// console.log(m);

// function square(x){
//     return x*x;
// }
// console.log(square(5));/

// let x = (x,y) => x+y
// console.log(x(23,3));

// let arr = [3,6,2,7,4,2,5,7,6];
// let sum = 0;
// // arr.forEach(function(item){
// //     sum = sum+item;
// // })
// arr.forEach((value) => {
//     sum = sum + value;
// })
// console.log("array after sorting " + arr.sort());
// console.log(sum);

// let arr = [3,6,2,7,4,2,5,7,6];
// let sum = 0;
// let a = arr.map((value) => {
//     // console.log(value);
//     let multiple = value *2;
//     sum = sum + multiple;
//     // return sum;
// })
// console.log(sum);

// let arr2 = [34,64,2,7,234,4,,89,7,9,34];
// let filtered = arr2.filter((value) => {
//     return value<10;
// })
// console.log(filtered);

// let arr3 = [1,2,3,4,5];
// let reducedMethod = arr3.reduce((n1,n2) => {
//     return n1 + n2;
// })
// console.log(reducedMethod);

// let a = 34;
// // a = a+1;
// const b = 12;
// var c = 56;
// console.log(a,b,c);

// {
//     const a = 92;
//     const b = 92;
//     const c = 92;
//     console.log(a,b,c);
// }
// console.log(a,b,c);

// let obj = {
//     "name": "mantu",
//     "job role": "SDE",
//     "salary": 56000000,
// }
// console.log(obj);
// obj.handsome = "yes"
// console.log(obj);
// // console.log(obj.key());


// function bhai(name){
//     console.log(`aur ${name} bhai kaise ho`);
//     console.log(`aur ${name} bhai sab badhiya`);
//     console.log(`aur ${name} bhai sab jhakass`);
//     console.log(`aur ${name} bhai padhai kaisa chal raha hai`);
// }
// // bhai("mantu");
// bhai('Mantu')
// let a = 67
// console.log(typeof a);
// //first code
// let sum = (a,b)=> {
//     console.log("The sum is :", a+b);
// }
// sum(3,5);
// sum(13,15);
// // second code
// const sum1 = (a,b)=> {
//     console.log("The sum is :", a+b);
// }
// sum1(3,5);
// sum1(13,15);

// let a = [23,45,56,87,54,73]
// for (let i=0; i<a.length; i++){
//     console.log(a[i]);
// }
// a.forEach((v,i) =>{     //value index array
//     console.log(i);
// })
// for (const val of a) {
//     console.log(val);
// }

// let arr2 = [1,2,3,4,5,6]
// let red = (a,b) =>{
//     return a*b;
// }
// console.log(arr2.reduce(red));

// setTimeout((e) => {
//     console.log("hell this is timeout function");
//     console.log(e);
// }, 1000);

// console.log("Hello Mr.Mantu");
// console.log("Are you learning Javascript");
// setTimeout(() => {
//     console.log("wee are inside timeout function");
// }, 2000);
// console.log("ye timeout ke badd ka fun hai");

// let selected = document.querySelector("body")
// selected.addEventListener("keydown", (e)=>{
//     console.log(e.key);
//     alert("you have pressed " + e.key)
//     if (e.key == "r" || e.key == "R"){
//         selected.style.backgroundColor = "red";
//     }
// })


// let a = Math.random()
// console.log("the vale is " + a);


let data = [
    {Name : "Mantu", Phone : "645534546", Marks : 89},
    {Name : "Rohan", Phone : "6455654546", Marks : 79},
    {Name : "Krishna", Phone : "6453454546", Marks : 75},
    {Name : "Shambhu", Phone : "64564546", Marks : 95},
    {Name : "Parvati", Phone : "6434546", Marks : 70},
];

data.forEach((stu, index) => {
    console.log(stu, index+1);
    
})



