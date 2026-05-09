// let arr = [30,40,50,100,50,80];
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// arr[6] = 90
// arr[15] = 150
// console.log("Total elements in array is: ",arr.length)
// console.log("Last element in array is: ",arr[arr.length - 1])
// console.log(arr[arr.length])//undefined
// console.log(arr,"\n","-----------------------------")






// let arr1 = [30,40,50,100,50,80]
// // arr1.length = 10
// console.log(arr1[arr1.length - 5])
// console.log(arr1,"\n","-----------------------------")

// for(let i = 0; i < arr1.length; i++){
//     console.log(arr1[i])
// }
// for(let a of arr1){
//     console.log(a)
// } 
// for(let a in arr1){
//     console.log(arr1[a])
// }









// arr[0] = 300
// arr[1] = 400
// arr[2] = 500
// arr[3] = 1000
// arr[4] = 500
// arr[5] = 800
// arr[6] = 900
// arr[15] = 1500
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5],"\n",arr,"\n","-----------------------------")




// emptArr = []
// console.log(emptArr,"\n","-----------------------------")







// let strArr = ["Hello", "World", "JavaScript", "Programming"];
// //indexing       0       1          2              3
// console.log(strArr)
// console.log(strArr[0])
// console.log(strArr[1])
// console.log(strArr[2])
// console.log(strArr[3],"\n","-----------------------------")

// console.log(strArr[0][4]) /// Accessing the fifth character of the first string in the array
// console.log("-----------------------------")






// let mixedArr = [10, "Hello", true, null, undefined, {name: "John"}, [1, 2, 3]];
// console.log(mixedArr,"\n","-----------------------------")









/*
questions
 multiply each element of array by 6
 print the elements in reverse order
 sum of all elements in array

*/
// //1
// let arr = [1,2,3,4,5,6]
// for(let i = 0; i < arr.length; i++){
//     arr[i] *= 6   
// }
// console.log(arr,"\n","-----------------------------")

// //2
// let arr = [1,2,3,4,5,6]
// for(let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i])
// }

//3
let sum = 0
let arr = [1,2,3,4,5,6]
for(let i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log("Sum of all elements in array is: ",sum)