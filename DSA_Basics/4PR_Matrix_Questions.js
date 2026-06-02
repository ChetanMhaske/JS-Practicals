// Create n x m matrix using loop


// let n = 3;
// let m = 4;
// let arr = [];
// let value = 1;

// for(let i = 0; i < n; i++){
//     let row  = []
//     for(let j = 0; j < m; j++){
//         row.push(value++)
//     }
//     arr.push(row)
// }
// console.log(arr)






/*
1 find largest element in 2D Array matrix
2 find the transpose of the matrix
3 do a snake traversal of a matrix : 123654789
4 spiral traversal of a matrix : 1,2,3,6,9,8,7,4,5
5 Boundary traversal : 1,4,7,8,9,6,3,2
*/



let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// let arr = [
//     [1,4,7,10],
//     [2,5,8,11],
//     [3,6,9,12]
// ]



// // 1 find largest element in 2D Array matrix
// let max = -Infinity;
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if(arr[i][j] > max){
//             max = arr[i][j]
//         }
//     }
// }
// console.log(max)



// // 2 find the transpose of the matrix
// let arr1 = []
// for(let i = 0; i < arr.length; i++){
//     let innerArr = []
//     for(let j = 0; j < arr[i].length; j++){
//         innerArr.push(arr[j][i])
//     }
//     arr1.push(innerArr)
// }
// console.log(arr1)


// // 3 do a snake traversal of a matrix : 123654789
// for(let i = 0; i < arr.length; i++){
//     if(i % 2 == 0){
//         for(let j = 0; j < arr.length; j++){
//             console.log(arr[i][j]);
//         }
//     }
//     else{
//         for(let j = arr.length - 1; j >= 0;j--){
//             console.log(arr[i][j])
//         }
//     }
// }




// // 4 spiral traversal of a matrix : 1,2,3,6,9,8,7,4,5
/*
    ---->
    1 2 3|
   >4 5 6|
   |7 8 9<
*/

let top = 0;//1st row index
let left = 0;//1st column index
let bottom = arr.length - 1;//last row index
let right = arr[0].length - 1;//last column index


let result = []
// while(top <= bottom && left <= right){

//     //top is fixed
//     for(let i = left; i <= right; i++){
//         result.push(arr[top][i])
//     }
//     top++;


//     //right is fixed
//     for(let i = top; i <= bottom; i++){
//         result.push(arr[i][right])
//     }
//     right--;


//     //bottom is fixed
//     for(let i = right; i >= left; i--){
//         result.push(arr[bottom][i])
//     }
//     bottom--;


//     //left is fixed
//     for(let i = bottom; i >= top; i--){
//         result.push(arr[i][left])
//     }
//     left++;
// }
// console.log(result)




// 1 4 7 8 9 6 3 2 5
// while(top <= bottom && left <= right){

//     //left is fixed
//     for(let i = top; i <= bottom; i++){
//         result.push(arr[i][left])
//     }
//     left++;

//     //bottom is fixed
//     for(let i = left; i <= right; i++){
//         result.push(arr[bottom][i])
//     }
//     bottom--

//     //right is fixed
//     if(left >= right) break;
//     for(let i = bottom; i >= top; i--){
//         result.push(arr[i][right])
//     }
//     right--

//     //top is fixed
//     if(top >= bottom) break;
//     for(let i = right; i >= left; i--){
//         result.push(arr[top][i])
//     }
//     top++
// }
// console.log(result)




/* 
Boundary traversal
1 2 3 6 9 8 7 4
*/
// while(top <= bottom && left <= right){

    //top is fixed
    for(let i = left; i <= right; i++){
        result.push(arr[top][i])
    }
    top++;


    //right is fixed
    for(let i = top; i <= bottom; i++){
        result.push(arr[i][right])
    }
    right--;

    
    //bottom is fixed
    for(let i = right; i >= left; i--){
        result.push(arr[bottom][i])
    }
    bottom--;

    //left is fixed
    for(let i = bottom; i >= top; i--){
        result.push(arr[i][left])
    }
    left++
    
// }
console.log(result)