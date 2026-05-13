/*  Removing elements from array  */

// // Delete last element from array 2 ways
// arr = [1,2,3,4]

// // arr.pop()
// // console.log(arr)

// let a = arr.length - 1
// delete arr[a]
// console.log(arr)





// Delete First element from array 2 ways
// arr = [1,2,3,4]

// // arr.shift()
// // console.log(arr)

// delete arr[0]
// console.log(arr)




// Delete certain no of elements from array
// arr = [1,2,3,4,5,6,7]

// arr.splice(3,3)
// console.log(arr)








/*  Adding elements in array  */


// Add element at the end of array 4 ways

// arr = [1,2,3]
// console.log(arr)
// arr.push(4)
// console.log(arr)

// arr[arr.length] = 4
// console.log(arr)

// arr.splice(arr.length,0,4)
// console.log(arr)

// arr = [...arr, 4] // "..." is spread operator 
// console.log(arr)

// arr = arr.concat(4) // concat()
// console.log(arr)




// at the starting of array
arr = [2,3,4]
console.log(arr)
//unshift()
// arr.unshift(1)
// console.log(arr)

//concat()
// arr = [1].concat(arr)
// console.log(arr)

//spread operator
// arr = [1,...arr]
// console.log(arr)

//splice()
// arr.splice(0,0,1)
// console.log(arr)

//push()
// let newArr = [1]
// for(let num of arr){
//     newArr.push(num)
// }
// console.log(newArr)