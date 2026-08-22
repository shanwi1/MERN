// const promise = new Promise((resolve, reject) => {
//     reject('Promise not resolved successfully!');
// })
// promise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('data received after 4 seconds');
//     }, 4000);
// });
// promise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

//console.log("End");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
// })

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}   

const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        data.map((user) => console.log(user.name));
    } 
    catch (error) {
        console.error(error);
    }
}           
getData();