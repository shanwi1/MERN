let age=10;
let res = age > 18?"vote":"not vote"; // Output: "vote"
console.log(res);

var a;
console.log(a); // Output: undefined

function student(){
    console.log("hello shanwi");
}
student(); // Output: hello shanwi

function add(a,b){
    console.log(a+b);
}
add(10,20); // Output: 30

function add(a,b){
    return a+b;
}
let result=add(10,20);
console.log(result); // Output: 30

const test=(a,b)=>{
    return a+b;
}
console.log(test(10,20)); // Output: 30

function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Shanwi");
}

processUser(greet);

setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);

let name = "Shanwi";
let g = 10;

console.log(`Hello ${name}, you are ${g} years old.`); // Output: Hello Shanwi, you are 10 years old.