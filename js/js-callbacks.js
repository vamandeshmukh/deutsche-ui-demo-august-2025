// Callbacks in javaScript 

// =======================
// // Problem in Async JS 
// =======================
// const getData = () => {
//     console.log("getData");
//     setTimeout(() => {
//         return {message: "data is available." };
//     }, 1000);
// };

// console.log("start");
// let data = getData();
// console.log(data.message); // TypeError: Cannot read properties of undefined (reading 'message')
// console.log("end");


// =========================
// Solution 1 - use callbacks 
// =========================
// pass a function as argument to another function 

// const getData = (arg) => {
//     console.log("getData");
//     setTimeout(() => {arg({message: "data is available." }); }, 1000);
// };

// getData((data) => { console.log(data.message);});

// const fun = (data) => { console.log(data.message);}
// getData(fun);


// // =========================
// // Solution 2 Promise using then() -> pending = success / failure 
// // =========================

// // function that returns a promise == sends data 
// const getData = (arg) => {
//     console.log("getData");
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({message: "data is available." });
//         }, 1000);
//     });
// };

// // function call that consumes the promise == gets data 
// getData()
// .then((data) => {
//     console.log(data.message);
// });



// =========================
// Solution 3 Promise with async / await 
// =========================

// function that returns a promise == sends data 
const getData = (arg) => {
    console.log("getData");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({message: "data is available." });
        }, 1000);
    });
};

// function call that consumes the promise with async / await == gets data 

const useData = async () => {
    const data = await getData();
    console.log(data.message);
};

useData();


// fetch().then().then().catch();
// fetch((apiUrl) => {}).then(() => {}).then(() => {}).catch(() => {});

// const apiUrl = "https://jsonplaceholder.typicode.com/users/1";

// fetch(apiUrl)
// .then((response) => { return response.json();})
// .then((data) => {
//     console.log(data.username);
//     console.log(data.nonExistingProperty);
// });

// // // shortcut syntax 
// fetch(apiUrl)
// .then(resp => resp.json())
// .then(data => console.log(data.username));
