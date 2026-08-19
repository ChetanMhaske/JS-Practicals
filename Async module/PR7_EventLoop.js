// function a(){
//     console.log("a")
//     b()
//     console.log("1")
// }
// function b(){
//     console.log("b")
//     c()
//     console.log("2")
// }
// function c(){
//     console.log("c")
// }

// a()


// console.log(1)
// Promise.resolve().then(function a(){
//     console.log("a")
// })
// Promise.resolve().then(function b(){
//     console.log("b")
// })
// console.log(2)
// //  1 2 a b




// console.log(1)

// setTimeout(function a(){
//     console.log("a")
// },1000)
// setTimeout(function b(){
//     console.log("b")
// },100)
// Promise.resolve().then(function c(){
//     console.log("c")
// })
// Promise.resolve().then(function d(){
//     console.log("d")
// })
// Promise.resolve().then(function e(){
//     console.log("e")
// })

// console.log(2)





// console.log(1)

// setTimeout(function a(){
//     console.log("a")
// })

// Promise.resolve().then(function b(){
//     console.log("b")
// })

// Promise.resolve().then(function c(){
//     console.log(2)
//     setTimeout(function d(){
//         console.log("d")
//     })
// })

// console.log(3)
// // 1    3   b   2   a   d


// starvation -> in the below code setTimeout will be inside that marcrotask queue waiting/starving 
// for microtask queue to be empty but it wont in the below example as again keeps getting added
// inside you microtask queue
console.log(1)

function again(){
    Promise.resolve().then(again)
}
again();

setTimeout(()=>{
    console.log("timer")
})

console.log(2)

//1. JS runs strictly on a single thread  (ie perform 1 task at a time) but it is able to perform
// async operations because of the runtime environment (browser or Node.js is multi threaded)
// JS does not handle time consuming taks s like network requests, timers, filesystem etc on its
// own thread, it delegates these tasks to hosting environments, which handles them in background

// 2. Callstack -> this tracks what func is currently executing. It handles sync code on the single main
// thread, following LIFO (Last In First Out) structure

// 3. Web API's/ Node.js API's -> these are background environment provided by the browser or Node.js
// they run seprate native threads to handle tasks like fetch(), setTimeout() etc
// once the background API is completed its task it moves the attached callback function to its 
// respective queue

// 4. Macro task queue -> handles large peices of work eg setTimeout, setInterval, UI rendering events etc
// 5. Micro task queue -> handles smaller and urgent tasks that need to run immediately.

// Micor task queue has more preference than Macro task queue -> callbacks inside marco task will wait 
// until everything inside micro task queue has completed its execution

// 6. EventLoop -> carries out the whole above process by checking continously if the call stack is empty
// or not