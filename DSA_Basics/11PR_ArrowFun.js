/** Arrow Function */


// Non Hoisting functions
// // 1. Assigning function to a variable with function keyword
// let Greet = function(message){
//     return message
// }

// // 2. Assigning function to a variable with => symbol
// let Greet = (message) => {
//     return message
// }

// 3. Its similar to 2nd function
// let Greet = (message) => message // its like returning value without {} bracakets
// console.log(Greet("Abc"))


// let func = (a,b) => a - b
// console.log(func(3,2))

// // let obj = () => {name:"abc"}//it will give undefined because {} it is function block
// let obj = () => ({name:"abc"})
// console.log(obj())


// let arr = [5,2,1,2,3,4]

// arr.sort(function(a,b){
//     return a-b
// });

// arr.sort((a,b) => {
//     return a-b
// });

// arr.sort((a,b) => a-b)
// console.log(arr)




/** Accessing functions using arrays and objects */

// function a(){
//     console.log("a")
// }
// function b(){
//     console.log("b")
// }

// let arr = [a,b]
// arr[0]() //function call
// arr[1]() //function call

// let obj = {
//     A:a,
//     B:b,
// }
// obj.A()
// obj.B()





/** Function Callback */

// function greet(){
//     console.log("hello")
// }

// function outer(fN){
//     fN()
// }
// outer(greet)


let res = num => 2/2
console.log(res())


// function outer(fN){
//     return function(){
//         console.log("hello")
//     }
// }
// outer()()
//or 
// let res = outer()
// res()



//or for all
// let outer = () => () => console.log("Hello")
// outer()()


//or for all
// let outer = () => {
//     return () => {
//         console.log("Hello")
//     }
// }
// outer()()



// function calculator(a,b,fn){
//     return fn(a,b)
// }

// function add(a,b){
//     return a + b
// }

// function mul(a,b){
//     return a * b
// }

// let calculator = (a,b,fn) => fn(a,b);
// let add = (a,b) => a + b;
// let mul = (a,b) => a * b;
// // add and mul becomes callback function
// console.log(calculator(3,2,add))
// console.log(calculator(3,2,mul))



// Give the output => "Hi Abc"

// function createGreeter(greetings){
//     return function (name){
//         return greetings + " " + name
//     }
// }

// console.log(createGreeter("Hi")("Abc"))

// //or 

// let res = createGreeter("Hi")
// console.log(res("Abc"))




/** Closures */

// function outer(){
//     let count = 0
//     return function(){
//         count++
//         console.log(count)
//     }
// }

// // console.log(outer()())
// const res = outer()
// res()
// res()
// res()
// res()




// function ATM(){
//     let pin = 12345
//     let balance = 5000
//     let accNo = 123123123
//     return () => {
//         return balance
//     }
// }
// const balance = ATM()
// console.log(balance())