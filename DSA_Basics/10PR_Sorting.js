// let arr = [5, 4, 3, 2, 1]
// // // let arr = [1,2,3,4,5]
// console.log(bubbleSort(arr))
// console.log(arr)

// /** This only sort array once but we also want to repeat same until the swap
//  ** becomes false */ 
// // function bubbleSort(arr){

// //     for(let i = 0; i < arr.length; i++){
// //         if(arr[i] > arr[i + 1]){
// //             let temp = arr[i]
// //             arr[i] = arr[i + 1]
// //             arr[i + 1] = temp
// //         }
        
// //     }
// //     return arr
// // }

// // this is correct solution
// function bubbleSort(arr){

//     let swap;
//     let swaps = 0;
//     do{
//         swap = false
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] > arr[i + 1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swap = true
//                 swaps++
//             }
        
//         }
//     }
//     while(swap) 

//    // let swap = true;
//    // while (swap) {
//    //     swap = false;
//    //     for (let i = 0; i < arr.length - 1; i++) {
//    //         if (arr[i] > arr[i + 1]) {
//    //             let temp = arr[i];
//    //             arr[i] = arr[i + 1];
//    //             arr[i + 1] = temp;
//    //             swap = true;
//    //         }
//    //     }
//    // }
//     return swaps + " " + arr
// }




// Same with recursion but it will take O(n^2) time complexity
// function bubbleSort(arr,n = arr.length - 1){

//     if(n == -1){
//         return arr
//     }
//     for(let i = 0; i < n; i++){
//         if(arr[i] > arr[i + 1]){
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr [i]]
//         }
        
//     }
//     return bubbleSort(arr,n - 1)
// }



/**   Insertion Sort   */

let arr = [-6,20,8,-2,4]
console.log(insertionSort(arr))
function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j > 0 && arr[j-1] > arr[j]; j--){
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
        }
    }
    return arr
}



/****** Selection Sort */
// let arr = [8,20,-2,4,-6]
// console.log(selectionSort(arr))
// function selectionSort(arr){
//     for(let i = 0; i < arr.length - 1; i++){
//         let min = i;
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[min]){
//                 min = j
//             }
//         }
//         [arr[i],arr[min]] = [arr[min],arr[i]]
//     }
//     return arr
// }

