var a=10;
{
    let a=20;
}
console.log(a); // Output: 20

let y=10;
{
    let y=20;
    console.log(y); // Output: 20
}
console.log(y); // Output: 10

let object={
    name: "John",
    age: 30,
    city: "New York"
};
console.log(object.name); // Output: John
console.log(object.age); // Output: 30
console.log(object.city); // Output: New York

let copy=object
copy.age=45
console.log(object.age); // Output: 45

console.log(5 == "5");   // true
console.log(5 === "5");  // false

if (false) {
    console.log("Yes");
} // doesn't run

if (0) {
    console.log("Yes");
} // doesn't run

if ("") {
    console.log("Yes");
} // doesn't run

if (null) {
    console.log("Yes");
} // doesn't run

if (undefined) {
    console.log("Yes");
} // doesn't run

if (NaN) {
    console.log("Yes");
} // doesn't run

console.log(0 || "Default"); // Output: "Default"



let value=null;
console.log(value ?? 18); // Output: 18