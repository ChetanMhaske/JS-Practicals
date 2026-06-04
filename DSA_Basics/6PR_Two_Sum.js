/*
Find if the target element exist in the array
the target is the sum of any 2 elements in the array
*/

// let arr = [2,6,5,8,11]
// let target = 10;
// console.log(hasTarget(arr))


// function hasTarget(arr){
    
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i; j < arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 return true
//             }
//         }
//     }
//     return false
// }



let arr = [0,-1,-2,-3,1]
let target = -2
console.log(twoSum(arr))

function twoSum(arr){
    arr.sort(sortArr)
    function sortArr(a,b){
        return a-b
    }
    

    let left = 0;
    let right = arr.length -1

    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum == target){
            return true
        }
        else if(sum < target){
            left++
        }
        else if(sum > target){
            right--
        }
    }

    // for(left; left < right; ){
    //     let sum = arr[left] + arr[right]
    //     if(sum == target){
    //         return true
    //     }
    //     else if(sum < target){
    //         left++
    //     }
    //     else if(sum > target){
    //         right--
    //     }
    // }

    return false
}




////// Sliding Window //////

// let arr = [5,2,-1,0,3]
// let size = 3

// console.log(maxSumSlidingWindow(arr,size))

// function maxSumSlidingWindow(arr,size){
//     let n = arr.length
//     if(n < size){
//         return "invalid size"
//     }

//     let windowSum = 0;
//     for(let i = 0; i < size; i++){
//         windowSum += arr[i]
//     }

//     let maxSum = windowSum

//     //sliding logic
//     //Slide the window from start to end of the array
//     // i.e the previous element arr[i-k] is removed from the windowSum and next element arr[i] is added
    
//     for(let i = size; i < n; i++){
//         windowSum += arr[i] - arr[i-size];
//         maxSum = Math.max(maxSum, windowSum)
//     }
//     return maxSum
// }



////////// Strings with nested loops ///////////////

/*
find all the possible palindromes in below string
*/

let str = "racecar"
console.log(PaliStr(str))

function PaliStr(str){
    
    let arr = []

    // let reverseStr = str.split("").reverse().join("")
    // if(reverseStr == str){
    //     arr.push(str)
    // }


    for(let i = 0; i < str.length; i++){
                         //<= :- For verifying whole string also
        for(let j = i+2; j <= str.length; j++){
            let sub = str.slice(i,j)
            let reverse = sub.split("").reverse().join("")
            if(sub == reverse){
                arr.push(sub)
            }
        }
    }
    return arr
}











/********* Remove Adjacent Duplicate elements */
// let s = 'abbaca'

// function removeAdjDuplicate(s) {
//     let stack = [];

//     for (let i = 0; i < s.length; i++) {
//         if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
//             stack.pop();
//         } else {
//             stack.push(s[i]);
//         }
//     }

//     return stack.join("");
// }
// console.log(removeAdjDuplicate(s))







////////////////// Time Complexity ///////////////


// Arrays Time Complexity
/*
push(),pop() :- O(1)
access :- O(n)
search :- O(n)
shift(),unshift() :- O(n)
concat(),slice(),splice() :- O(n)
forEach(),map(),filter(),reduce() :- O(n)
*/


// Note: arr.sort() uses Timsort algo which is hybrid of merge 
// and insertion sort
// Best Case: O(n) -> if array is already sorted
// Worst Case: O(n log n)

// for(let i = 0; i < n; i++){
//     for(let j = 0; j < m; j++){
//         count++
//     }
// } O(n x M) is its time complexity


/*
O(n + M) is its time complexity
for(let i = 0; i < n; i++){
    count ++
} 
for(let j = 0; j < m; j++){
        count++
}
*/


/*
O(log n) will be its time complexity
function halfLoop(n){
    let i = 1
    while(i < n){
        i *= 2
    }
}
*/

/*
its time complexity will be O(n^2) concatenation takes O(n) 
and loop also runs for n times
function buildString(arr){
    let res = ""
    for(let i = 0; i < arr.lenght; i++){
        res += arr[i];
    }
}
*/







// let str = "xaxbxc"
// let s = []
// for(let i = 0; i < str.length; i++){
//     if(str[i] !== 'x'){
//         s.push(str[i])
//     }

// }
// console.log(s.join(""))