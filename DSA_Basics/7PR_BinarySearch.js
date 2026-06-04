// let arr = [1,2,3,4,5,6]
// let target = 3
// function linearSearch(arr,target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == target){
//             return `Found at ${i}th index`
//         }
//     }
//     return "Not found"
// }
// console.log(linearSearch(arr,target)) //Big O(n) Time complexity



/******** Binary Search **********/
/**
[ 1  ,2,3,4,  5  ,6,7,8,   9 ]
 left        mid         right

target = 8 
Step 1 : check if target == mid
Step 2 : check else if target < mid 
*/




/***** Binary Search Ascending order ******/
//          0   1 2 3   4   5 6 7    8
let arr = [ 1  ,2,3,4,  5  ,6,7,8,   9 ]
// let arr = [9,8,7,6,5,4,3,2,1]
let target = 8


console.log(binarySearch(arr,target))

function binarySearch(arr,target){


    let left = 0
    let right = arr.length - 1
    
    for(let i = 0; i <= arr.length-1; i++){
        
        let mid = Math.floor((left + right)/2);
        if(arr[mid] == target){
            return `Found at ${mid} index (Ascending order)`
        }
        else if(arr[mid] < target){
            left = mid + 1
        }
        else if(arr[mid] > target){
            right = mid - 1
        }
    }
    return "Not found (Ascending order)"
}




/***** Binary Search Descending order ******/
// let arr1 = [9,8,7,6,5,4,3,2,1]
// let target = 8


// console.log(binarySearchDesc(arr1,target))

// function binarySearchDesc(arr1,target){


//     let right = 0
//     let left = arr1.length - 1
    
//     for(let i = 0; i <= arr1.length-1; i++){
        
//         let mid = Math.floor((left + right)/2);
        
//         if(arr1[mid] == target){
//             return `Found at ${mid} index (Descending order)`
//         }
//         else if(arr1[mid] < target){
//             left = mid + 1
//         }
//         else if(arr1[mid] > target){
//             right = mid - 1
//         }
//     }
//     return "Not found (Descending order)"
// }



/**** find 1st occurance of target */
// let arr = [1,2,5,5,5,6,7]
// let target = 5

// console.log(binarySearchOccurance(arr,target))

// function binarySearchOccurance(arr,target){


//     let left = 0
//     let right = arr.length - 1
//     let result = -1
    
//     while(left <= right){
        
//         let mid = Math.floor((left + right)/2);
//         if(arr[mid] == target){
//             result = mid // sorting the value of the index
//             right = mid - 1 //checking on the left side // left = mid + 1 for last occ
//         }
//         else if(arr[mid] < target){
//             left = mid + 1
//         }
//         else if(arr[mid] > target){
//             right = mid - 1
//         }
//     }
//     return result
// }
//left 0
//right 6
//mid = 0+6 = 6/2 = 3

//left 0
//right 2
//mid = 0+2 = 2/2 = 1

//left 2
//right 2
//mid = 2+2 = 4/2 = 2





/*
check if the target is not present find the left most index where it 
should be inserted in the array 
*/

// let arr = [1,2,3,5,6,7]
// let target = 4

// console.log(binarySearchIndex(arr,target))

// function binarySearchIndex(arr,target){


//     let left = 0
//     let right = arr.length - 1
    
//     while(left <= right){
        
//         let mid = Math.floor((left + right)/2);
//         if(arr[mid] == target){
//             return mid
//         }
//         else if(arr[mid] < target){
//             left = mid + 1
//         }
//         else if(arr[mid] > target){
//             right = mid - 1
//         }
//     }
//     return `The ${target} should be inserted at ${left} index in array`
// }