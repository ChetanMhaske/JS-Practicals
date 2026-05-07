//1. const

// const name = "Xyz"
// name = "Abc"
// console.log(name)

//use capital letters when you are using const values that need to be 
//used in multiple places

// const PI = Math.PI
// const BLACK = '#000000'



//Scope

// let hello = "Hello 1" //global level scope
// {
//     let hello = "Hello 2" // Block || Local level scope
//     console.log(hello)
// }
// console.log(hello)


//example 1

// let username = "Alice"

// function fun(){
//     username = "Bob"
// }
// fun()
// console.log(username)


// let username1 = "Alice"

// function fun1(){
//     let username1 = "Bob"
// }
// console.log(username1)



//example 2
// let i 
// for(i = 0; i < 10; i++){
// // console.log(i)
// }
// console.log(i)


// let x = 1
// {
//     let x = 2
//     {
//         let x = 3
//         console.log(x)//3
//     }
//     console.log(x)//2
// }
// console.log(x)//1




// console.log(a) //error
// let a = 5

// console.log(a) //error
// const a = 5

// console.log(a) // print undefined
// var a = 5




// function expression

// greet();
// var fun = function(){
//     console.log("Hello")
// }




//Var scope

// for(var i = 0; i < 5; i++){}
// console.log(i)

// for(var i = 0; i < 6; i++){}
// console.log(i)