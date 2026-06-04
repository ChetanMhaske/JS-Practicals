//[1, 2, 3]

//[1,2,3], [1,2], [2,3], [1], [2], [3]


let arr = [1,2,3]
for(let i = 0; i < arr.length; i++){
    let subArr = [];
    for(let j = i; j < arr.length; j++){
        subArr.push(arr[j])
        console.log(subArr)
        let sum = 0;
        for(let i = 0; i < subArr.length; i++){
            sum += arr[i]
        }
        console.log(sum)
    }
    
}

// for(let i = 0; i < arr.length; i++){
//     for(let j = i; j < arr.length; j++){
//         console.log(arr.slice(i,j+1))
//     }
    
// }




/////////////////// tasks ///////////////

/*
given a target element find if the sum of subarrays gives 
that target
*/

// let arr1 = [1,2,3,4,5]
// let target = 5

// console.log(hasSubArrSum(arr1,target))


// function hasSubArrSum(array,target){
    
//     for(let i = 0; i < array.length; i++){
//         let sum = 0;
//         for(let j = i; j < array.length; j++){
//             sum += array[j]
//             if(sum === target){
//                 console.log(array.slice(i,j+1))
//                 return true;
//             }   
//         }
//     }
//     return false
// }





// Kadane's algorithm


// [-2,-3,4,-1,-2,1,5,-3] max sum of this array's subarray will be 7
// [4,-1,-2,1,5]

// to calculate this max sum we are using kadence algorithm

// let arr = [-2,-3,4,-1,-2,1,5,-3]

// let result = maxSubArrSum(arr)
// console.log(result)

/*

maxEndingHere:
it1 -3
it2 4
it3 3
it4 1
it5 2
it6 7
it7 4
maxSoFar:
it1 -2
it2 4
it3 4
it4 4
it5 4
it6 7
it7 7

*/

// function maxSubArrSum(arr){
//     let maxSoFar = arr[0];// Tracks maximum sum found till now
//     let maxEndingHere = arr[0]// Tracks the max sum of subarray ending at
//     // current index

//     //looping throught the array starting from 1
//     for(let i = 1; i < arr.length; i++){


//         //either extend previous subarray or start from current element
//         // take maximum of(current vs previous sum + current)
//         //maxEndingHere + arr[i] will always be greater than arr[i] if both are +ve
//         //if arr[i] becomes -ve the sum is less than maxEnding and their is not point storing that valus
//         maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i])

//         //updating global max if current ending sum is larger
//         maxSoFar = Math.max(maxSoFar,maxEndingHere)
//     }
//     return maxSoFar
// }




function maxSubArrSum(arr){
    let maxSoFar = arr[0]
    let maxEndingHere = arr[0]

    for(let i = 1; i < arr.length; i++){
        
        if(arr[i] > maxEndingHere + arr[i]){
            maxEndingHere = arr[i]
        } 
        else{
            maxEndingHere = maxEndingHere + arr[i]
        }


        if(maxSoFar < maxEndingHere){
            maxSoFar = maxEndingHere;
        }
    }
    return maxSoFar
}


/*
Brute force approach to the same
*/


// let arr = [-2,-3,4,-1,-2,1,5,-3]

// let max = -Infinity

// for(let i = 0; i < arr.length; i++){
//     for(let j = i; j < arr.length; j++){
//         let sum = 0;
//         for(let k = i; k <= j; k++){
//             sum += arr[k]
//         }
//         max = Math.max(max,sum)
//     }
// }
// console.log(max)


