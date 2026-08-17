// function A(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(1)
//         }, 3000);
//     })
// }
// function B(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(2)
//         }, 2000);
//     })
// }
// function C(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(3)
//         }, 1000);
//     })
// }

// // A().then(data=>console.log(data))
// // B().then(data=>console.log(data))
// // C().then(data=>console.log(data))

// async function execute() {
//     try{
//         const res1 = await A()
//         console.log(res1)
//         const res2 = await B()
//         console.log(res2)
//         const res3 = await C()
//         console.log(res3)
//     }catch(err){
//         console.log(err)
//     }
// }
// execute()



// Promise.all() -> takes an array of promises as argument and returns a new promise 
// the new promise resolves all the listed promises are resolved 
// and the array of their results becomes its result

// It either gives me the results of all the fullfilled promises in an array 
// or the first rejected promise
// const res = Promise.all([
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(1)
//         }, 3000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             rej(2)
//         }, 2000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             rej(3)
//         }, 1000);
//     })
// ]).then(item => console.log(item)) // [1, 2, 3]
// .catch(err=>console.log(err))



// console.log(fetch("https://api.github.com/users/iliakan"))




// Promise.all([
//     fetch("https://api.github.com/users/iliakan"),
//     fetch("https://api.github.com/users/remy"),
//     fetch("https://api.github.com/users/jeresig")
// ]).then(data => console.log(data))





async function testing() {
    let res = await Promise.all([
        fetch("https://api.github.com/users/iliakan"),
        fetch("https://api.github.com/users/remy"),
        fetch("https://api.github.com/users/jeresig")        
    ])
    // res.map(async(item) => {
    //     let data = await item.json()
    //     console.log(data)
    // })
    // let dataArr = await Promise.all(res.map(item => item.json()))
    // console.log(dataArr)
}
testing()









// Promise.allSettled([
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(1)
//         }, 3000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(2)
//         }, 2000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             rej(3)
//         }, 1000);
//     })
// ]).then(item => console.log(item)) // [1, 2, 3]
// .catch(err=>console.log(err))

/*
If any promise gets rejected still it will complete all the 
remaining promise and return all the results at once after either 
fullfilled or rejected
[
    {
        "status": "fulfilled",
        "value": 1
    },
    {
        "status": "fulfilled",
        "value": 2
    },
    {
        "status": "rejected",
        "reason": 3
    }
]
*/




// race()
// Promise.race([
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(1)
//         }, 3000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(2)
//         }, 200);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             rej(3)
//         }, 1000);
//     })
// ]).then(item => console.log(item)) // [1, 2, 3]
// .catch(err=>console.log(err))





// Promise.any([
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(1)
//         }, 3000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(2)
//         }, 2000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(3)
//         }, 1000);
//     })
// ]).then(item => console.log(item)) // [1, 2, 3]
// .catch(err=>console.log(err))


// fetch("https://jsonplaceholders.typicode.com/posts"),
// fetch("https://jsonplaceholders.typicode.com/comments"),
// fetch("https://jsonplaceholders.typicode.com/users"),

async function func() {
    let res = await Promise.any([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/comments"),
        fetch("https://jsonplaceholder.typicode.com/posts"),
    ])

    let data = await res.json()
    console.log(data)
}
func()