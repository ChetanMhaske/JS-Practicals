//1. Slice function

// let arr = [1,2,3,4,5,6,7,8,9]
// //index = [0,1,2,3,4,5,6,7,8]

// console.log(arr.slice(3))

// console.log(arr.slice(2,4))


//you are given an array and size write the function to split the
//array into the given sizes

// let arr = [1,2,3,4,5,6,7,8,9]
// function splitArray(arr,size){
//     // let a = arr.slice(0,size)
//     // let b = arr.slice(size,size+size)
//     // let c = arr.slice(size+size,size+size+size)
//     // let arr2 = [a,b,c]
//     // console.log(arr2)
//     let arr2 = []

//     for(let i = 0; i < arr.length; i+=3){
//         arr2.push(arr.slice(i,i+3))
//     }
//     return arr2
// }
// console.log(splitArray(arr,3))



//2. Splice function

// let fruits = ["apple", "Bannana", "Orange", "Chikoo"]

// fruits.splice(2,2)

// console.log(fruits)



//task You are give an array of  eleents and your task is to 
//remove all falsy values from it

// let arr = [1,2,0,3,"a",null,undefined,4,""]

// for(let i = 0; i < arr.length; i++){
//     if(!arr[i]){
//         arr.splice(i,1)
//         i--
//     }
// }
// console.log(arr)

// let arr = [1,2,0,3,"a",null,undefined,4,""]

// for(let i = arr.length; i >= 0; i--){
//     if(!arr[i]){
//         arr.splice(i,1)
//     }
// }
// console.log(arr)




// let fruits = ["apple", "Bannana"]
// console.log(fruits)
// console.log(fruits.splice(2,0,"Orange","Chikoo"))
// console.log(fruits)

// //task to replace Orange in the fruits with Mango

// fruits.splice(2,1,"Mango")
// console.log(fruits)








//3. indexOf function

// let arr = [1,2,4,1,2,3,3,5,4,6,9,4]

// console.log(arr.indexOf(4,3))



//task to replace Orange from array to Mango with splice and indexOf

// let fruits = ["apple", "Bannana", "Orange", "Chikoo"]

// fruits.splice(fruits.indexOf("Orange"),1,"Mango")
// console.log(fruits)






//4. includes function

// let fruits = ["apple", "Bannana", "Orange", "Chikoo"]
// console.log(fruits.includes("apple"))
// console.log(fruits.includes("Mango"))




//5. concat function

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [7,8,9]

// let arr4 = arr1.concat(arr2,arr3,10,11,12)
// console.log(arr4)















//6. reverse function

let arr = [1,2,3,4,5]

console.log(arr.reverse())