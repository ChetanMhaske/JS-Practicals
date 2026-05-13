//Tasks

// 1. Two arrays are given add the elements from fruits1 to fruits2


// let fruits1 = ["Apple", "Banana", "Chikoo", "Orange"]
// let fruits2 = []

// let fruits2 = [].concat(fruits1)

// for(let i = 0; i < fruits1.length; i++){
//     fruits2.push(fruits1[i])
// }

// for(fruits of fruits1){
//     fruits2.push(fruits)
// }

// for(let i = 0; i < fruits1.length; i++){
//     fruits2[i] = fruits1[i] // or fruits2[fruits2.length] = fruits1[i]
// }

// console.log(fruits2)

// 2. Write a function that takes empty array and adds even numbers from 1 to 10 

// let arr = []
// function fun(arr){
//     for(let i = 1; i <= 10; i++){
//         if(i % 2 === 0){
//             arr.push(i)
//         }
//     }
//     console.log(arr)
// }
// fun(arr)


// function fun(arr){
//     for(let i = 1; i <= 10; i++){
//         if(i % 2 === 0){
//             arr[arr.length] = i
//         }
//     }
//     console.log(arr)
// }
// fun(arr)


// function fun(arr){
//     for(let i = 2; i <= 10; i += 2){
//         arr[arr.length] = i        
//     }
//     console.log(arr)
// }
// fun(arr)


// function fun(arr){
//     let i = 2
//     while(i <= 10){
//         arr[arr.length] = i;
//         i += 2;
//     }
//     console.log(arr)
// }
// fun(arr)





//3. Guess the Output

// let arr1 = [1,2,3,4,5]
// for(let i = 0; i < arr1.length; i++){
//     arr1.pop()
// }
// console.log(arr1)





//4. create 2 functions 
//   1 is called removeLastElement which removes last element 
//   of array and works only if their are elements in array
//   2 is to undo function which undos only the previous action

// let arr = [1, 2, 3, 4, 5];

// let lastElement 
// let arr2 = []

// function removeLastElement(arr1) {
//     if (arr1.length > 0) {
//         lastElement = arr1.pop();
//         arr2.push(lastElement)
//     }
// }

// function undo(){
//     if(lastElement){
//         arr.push(lastElement)
//     }
//     lastElement = null
// }

// removeLastElement(arr)
// removeLastElement(arr)
// console.log(arr)
// undo()
// console.log(arr)
// console.log(arr2)

// let arr = [1,2]
// arr.push(3,4,5) same for unshift
// console.log(arr)