/*
given a target element find if the sum of subarrays gives 
that target
*/

let arr = [1,2,3,4,5]
let target = 5
let count = 0
for(let i = 0; i < arr.length; i++){
    let sum = 0;
    for(let j = i; j < arr.length; j++){
        sum += arr[j]
        if(sum == target){
            console.log(arr.slice(i,i+j))
            console.log(true)
            count++
        }

        // // for sum of all sub arrays 
        // console.log(arr.slice(i,j+1))
        // console.log(sum)
        
    }
}
console.log(count)
let n = arr.length
console.log(n * (n+1) / 2)



// find max element in every sub array