/** Merge Sort */

// let arr = [-6,20,8,-2,4]

// console.log(mergeSort(arr))


// // This function divides array into smaller pieces
// function mergeSort(arr){
//     if(arr.length == 1){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)
//     let leftArr = [] //arr.slice(0,mid)
//     for (let i = 0; i < mid; i++) {
//         leftArr.push(arr[i]);
//     }
//     let rightArr = [] //arr.slice(mid)
//     for (let i = mid; i < arr.length; i++) {
//         rightArr.push(arr[i]);
//     }

//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// // This function merges the sorted array
// function merge(left,right){
//     const sortedArr = [];
 
//     while(left.length > 0 && right.length > 0){
//         if(left[0] <= right[0]){
//             sortedArr.push(left.shift())
//         }
//         else{
//             sortedArr.push(right.shift())
//         }
//     }
//     return [...sortedArr,...left,...right]
// }






/** Quick Sort */

// let arr = [-6,20,8,-2,4]
// console.log(quickSort(arr))

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot = arr[arr.length-1] // arr[0] and for i = 1; i < arr.length
//     let left = []
//     let right = []
//     for(let i = 0; i < arr.length - 1; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }

/** Worst case Time complexity is O(n^2) */
/** Best case O(n log n)  */
/** Draw back is Space complexity O(n) */

// Quick Sort witg inplace To overcome drawback of space complexity 

// let arr = [8,3,1,7,0,10,2]
// inPlace(arr)

// function partition(arr,low,high){
//     const pivot = arr[high]
//     let i = low - 1

//     for(let j = low; j < high ; j++){
//         if(arr[j] < pivot){
//             i++;
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//     }
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
//     return i + 1
// }

// function inPlace(arr,low = 0, high = arr.length - 1){
//     if(low >= high) return ;

//     const pi = partition(arr,low,high)

//     inPlace(arr,low,pi - 1)
//     inPlace(arr,pi + 1,high)
// }
// console.log(arr)

