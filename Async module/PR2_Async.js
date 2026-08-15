// function A(callback){
//     setTimeout(() => {
//         console.log(1)
//         if(callback)callback()
//     }, 2000);
// }
// function B(callback){
//     setTimeout(() => {
//         console.log(2)
//         if(callback)callback()
//     }, 2000);
// }

// function C(){
//     setTimeout(() => {
//         console.log(3)
//     }, 2000);
// }

// A(()=>{
//     B(()=>{
//         C()
//     })
// })

function A(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log(1)
            res()
        }, 2000);
    })
}
function B(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log(2)
            res()
        }, 2000);
    })
}

function C(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log(3)
            res()
        }, 2000);
    })
}
// async function func() {
//     let res1 = await A()
//     let res2 = await B()
//     let res3 = await C()
// }
// func()

// A().then(()=>B()).then(()=>C())

// Async operations are getting executed in a particular order the next async operation is dependent on the 
// execution of the 1st async operation


// function getCheese(callback){
//     setTimeout(() => {
//         const cheese = "cheese"
//         console.log("Here is : ",cheese)
//         callback(cheese)
//     }, 2000);
// }


// function makeDough(cheese,callback){
//     setTimeout(() => {
//         const dough = cheese + " dough"
//         console.log("Here is : ", dough)
//         callback(dough)
//     }, 2000);
// }

// function bakePizza(dough,callback){
//     setTimeout(() => {
//         const pizza = dough + " Pizza"
//         console.log("Here is : ",pizza)
//         callback(pizza)
//     }, 2000);
// }


// getCheese((cheese)=>{
//     makeDough(cheese,(dough)=>{
//         bakePizza(dough,(pizza)=>{
//             console.log("Got my pizza "+pizza)
//         })
//     })
// })

// This is Callback Hell







// solution for callback hell is promise
// const promise1 = new Promise(function(resolve,reject){

//     // do async tasks
//     // DB Calls, cryptography etc
//     setTimeout(() => {
//         console.log("Async Task is completed")
//         // you have to call resolve here to connnect with .then()
//         resolve()
//         reject()
//     }, 2000);
// })

// // consuming a promise
// promise1.then(function(){
//     // this will only be printed after the promise is done executing
//     console.log("Promise is resolved")
// })




// const promise1 = new Promise(function(resolve,reject){

//     setTimeout(() => {
//         console.log("Async Task is completed")
//         resolve()
//         reject()
//     }, 2000);
// }).then(function(){
//     console.log("Promise is resolved")
// })




// // data consumption
// const promise2 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Fetching Data")
//         data = {
//             name:"Ghost",
//             age:22
//         }
//         resolve(data)
//         reject()
//     }, 2000);
// }).then(function(user){
//     // console.log(user)
//     console.log("Promise is resolved",user.name)
// })





// reject:catch() and settle:finally()
// const promise3 = new Promise(function(resolve,reject){

//     setTimeout(() => {
//         console.log("Fetching Data")
//         let error = false;
//         if(!error){
//             data = {name:"Ghost",age:22}
//             resolve(data)
//         }
//         else{
//             reject("Something went wrong")
//         }
//     }, 2000);
// }).then(function(data){
//     console.log("Promise is resolved",data)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Promise has executed")
// })





// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Fetching Data")
//         data = {name:"Ghost",age:22}
//         resolve(data)
//     }, 2000);
// }).then(function(user){
//     console.log("Promise is resolved ",user)
//     return user
// }).then(function(user){
//     console.log(user.name)
//     return user
// }).then(function(user){
//     console.log(user.age)
// })





function getCheese(){
    return new Promise((res,rej)=>{

        setTimeout(() => {
            const cheese = "cheese"
            console.log("Here is : ",cheese)
            res(cheese)
        }, 2000);
    })
}


function makeDough(cheese){
    return new Promise((res,rej)=>{

        setTimeout(() => {
            const dough = cheese + " dough"
            console.log("Here is : ", dough)
            res(dough)
        }, 2000);
    })
}

function bakePizza(dough){
    return new Promise((res,rej)=>{

        setTimeout(() => {
            const pizza = dough + " Pizza"
            console.log("Here is : ",pizza)
            res(pizza)
        }, 2000);
    })
}

// async function fetching() {
//     let res1 = await getCheese()
//     let res2 = await makeDough(res1)
//     let res3 = await bakePizza(res2)
// }
// fetching()

// getCheese().then(res => makeDough(res).then(res2=>bakePizza(res2)))
// .catch(err=>console.log(err))

getCheese().then((cheese)=>{
    return makeDough(cheese)
}).then((dough)=>{
    return bakePizza(dough)
}).then((pizza)=>{
    console.log("Here everything is ready: ",pizza)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log("Pizza is ready")
})