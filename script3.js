let arr = [10,20,30]; // Output: 10

arr.push(40);
arr.pop();
arr.unshift(5);
arr.shift();
console.log(arr);

let data = ["shanwi", "b", "m"];
//console.log(data[0]); // Output: shanwi

let num = [2,3,4,5,6];

let res = num.map(num=>num*2);
//console.log(res); // Output: [4, 6, 8, 10, 12]

let res1 = data.map(data=>data.toUpperCase());
//console.log(res1); // Output: ["SHANWI", "B", "M"]

let arr1 = [10,20,30,40,50];
let res2 = arr1.filter(arr1=>arr1%2===0);
console.log(res2); // Output: [20, 40]

let students = [
    { name: "Shanwi", age: 20 },
    { name: "Rahul", age: 21 },
    { name: "Anu", age: 25 }
];
let school = students.map((n)=>n.name)
console.log(school);
let ans = students.filter(students=>students.age > 20);
console.log(ans); // Output: [{ name: "Rahul", age: 21 }, { name: "Anu", age: 25 }]

let arr2 = [10,20,30,40,50];
let arr3 = [...arr2,5,7,8];
console.log(...arr3); // Output: 10 20 30 40 50 5 7 8

const merge = (...numbers) => console.log(numbers);
merge(1,2,3,4,5); // Output: [1, 2, 3, 4, 5]

let aer = [10,20,30,40,50];
let [num1,num2,...num3] = aer;
console.log(num1,num2,num3); // Output: 10 20 30 40 50

let student = {name: "Shanwi", age: 20, city: "Bangalore"};
let {name,age,city} = student;
console.log(name,age,city); // Output: Shanwi 20 Bangalore

