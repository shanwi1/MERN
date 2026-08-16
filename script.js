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

