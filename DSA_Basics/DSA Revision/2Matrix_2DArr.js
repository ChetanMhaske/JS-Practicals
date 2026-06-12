// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// //1.Print a Matrix
// console.log(arr)

// //2.Print Each Row
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// //3.Print Each Column
// for(let i = 0; i < arr.length; i++){
//     let colWise = []
//     for(let j = 0; j < arr[0].length; j++){
//         colWise.push(arr[j][i])
//     }
//     console.log(colWise)
// }

// //4.Find Number of Rows and Columns
// //No of rows:
// let rows = arr.length
// console.log(rows)
// //No of columns
// let columns = arr[0].length
// console.log(columns)



// //5.Find Sum of All Elements
// console.log('\n')
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         sum += arr[i][j]
//     }
// }
// console.log(sum)


// //6.Find Maximum Element
// console.log('\n')
// let max = arr[0][0]
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if(arr[i][j] > max){
//             max = arr[i][j]
//         }
//     }
// }
// console.log("MAX",max)

// //7.Find Minimum Element
// console.log('\n')
// let min = arr[0][0]
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if(arr[i][j] < min){
//             min = arr[i][j]
//         }
//     }
// }
// console.log("MIN",min)

// //8.Count Even and Odd Numbers
// console.log('\n')
// let countEven = 0
// let coundOdd = 0
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[0].length; j++){
//         if(arr[i][j] % 2 == 0){
//             countEven++
//         }
//         else{
//             coundOdd++
//         }
//     }
// }
// console.log(countEven)
// console.log(coundOdd)


// // Sum of Each Row
// console.log('\n')
// for(let i = 0; i < arr.length; i++){
//     let sum = 0

//     for(let j = 0; j < arr[0].length; j++){
//         sum += arr[i][j]
        
//     }
//     console.log(sum)
// }


// // Sum of Each Column
// console.log('\n')

// for(let i = 0; i < arr[0].length; i++){
//     let sum = 0;
//     for(let j = 0; j < arr.length; j++){
//         sum += arr[j][i]
//     }
//     console.log(sum)
// }
// console.log('\n')

// //or
// for(let i = 0; i < arr.length; i++){
//     let sum = 0

//     for(let j = 0; j < arr[0].length; j++){
//         sum += arr[j][i]
        
//     }
//     console.log(sum)
// }

// // Find Row With Maximum Sum
// console.log('\n')
// let max1 = -Infinity
// for(let i = 0; i < arr.length; i++){
//     let sum = 0

//     for(let j = 0; j < arr[0].length; j++){
//         sum += arr[i][j]
        
//     }
//     if(sum > max1){
//         max1 = sum
//     }
// }
// console.log(max1)

// // Find Column With Maximum Sum
// console.log('\n')
// let maxCol = -Infinity
// for(let i = 0; i < arr.length; i++){
//     let sum = 0;
//     for(let j = 0; j < arr[0].length; j++){
//         sum += arr[j][i]
//     }
//     if(sum > maxCol){
//         maxCol = sum
//     }
// }
// console.log(maxCol)

// // Find Row With Maximum Number of Even Elements
// console.log('\n')
    
// let maxCountRow = -Infinity
// // let targetRowIndex = -Infinity
// for(let i = 0; i < arr.length; i++){
//     let rowCount = 0
//     for(let j = 0; j < arr[0].length; j++){
//         if(arr[i][j] % 2 == 0){
//             maxEven = arr[i][j]
//             rowCount++
//         }
        
//     }
//     if(rowCount > maxCountRow){
//         maxCountRow = i
//         // maxCountRow = rowCount
//         // targetRowIndex = i
//     }
    
// }
// console.log(arr[maxCountRow])
// // console.log(arr[targetRowIndex])










// //Find Largest Element in Every Row
// console.log('\n')
// for(let i = 0; i < arr.length; i++){
//     let max = -Infinity
//     for(let j = 0; j < arr[0].length; j++){
//         if(max < arr[i][j]){
//             max = arr[i][j]
//         }

//     }
//     console.log(max)
// }




// task below is the given array insert elements into it so the result 
// looks like arr2
// let arr2 = [[1,2,3],[4,5,6],[7,8,9]]
let arr = []
let count = 0
for(let i = 1; i <= 3; i++){
    let subArr = []
    for(let j = 1; j <= 3; j++){
        count++
        subArr.push(count)
    }
    arr.push(subArr)
}
console.log(arr)


console.log("\n")

/*
1 print the elements rowwise : 1,2,3,4,5,6,7,8,9
2 print the elements column wise : 1,4,7,2,5,8,3,6,9
3 print the diagonal elements of the square matrix : 1,3,5,7,9
4 print the non diagonal elements of the square matrix : 2,4,6,8
5 find the center element of the square matrix: 5
*/

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[0].length; j++){
        if((i + j == arr.length - 1 && i == j)){

            console.log(arr[i][j])
        }
    }
}
console.log("\n")


/*
1 find largest element in 2D Array matrix
2 find the transpose of the matrix
3 do a snake traversal of a matrix : 123654789
4 spiral traversal of a matrix : 1,2,3,6,9,8,7,4,5
5 Boundary traversal : 1,4,7,8,9,6,3,2
*/

// 2 x 3 into 3 x 2 row = column anc column = row
let arr1 = []
for(let i = 0; i < arr.length; i++){
    let innerArr = []
    for(let j = 0; j < arr[i].length; j++){
        innerArr.push(arr[j][i])
    }
    arr1.push(innerArr)
}
console.log(arr1) 


//snake pattern
for(let i = 0; i < arr.length; i++){
    if(i % 2 == 0){
        for(let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j])
        }
    }
    else{
        for(let j = arr[i].length - 1; j >= 0; j--){
            console.log(arr[i][j])
        }
    }
}

console.log('\n')
// // 4 spiral traversal of a matrix : 1,2,3,6,9,8,7,4,5
/*
    ---->
    1 2 3|
   >4 5 6|
   |7 8 9<
*/

// let top = 0
// let bottom = arr.length - 1

// let left = 0;
// let right = arr[0].length - 1;

// let res = []
// console.log(arr)
// while( top <= bottom && left <= right ){


//     //top is fixed
//     for(let i = left; i <= right; i++){
//         res.push(arr[top][i])
//     }
//     top++

//     //right is fixed
//     for(let i = top; i <= bottom; i++){
//         res.push(arr[i][right])
//     }
//     right--

//     // bottom is fixed
//     for(let i = right; i >= left; i--){
//         res.push(arr[bottom][i])
//     }

//     bottom--

//     // left is fixed
//     for(let i = bottom; i >= top; i--){
//         res.push(arr[i][left])
//     }

//     left++


// }
// console.log(res)



// boundary traversal

// let top = 0
// let bottom = arr.length - 1

// let left = 0;
// let right = arr[0].length - 1;

// let res = []
// console.log(arr)

// //top is fixed
// for(let i = left; i <= right; i++){
//     res.push(arr[top][i])
// }
// top++

// //right is fixed
// for(let i = top; i <= bottom; i++){
//     res.push(arr[i][right])
// }
// right--

// // bottom is fixed
// for(let i = right; i >= left; i--){
//     res.push(arr[bottom][i])
// }

// bottom--

// // left is fixed
// for(let i = bottom; i >= top; i--){
//     res.push(arr[i][left])
// }

// left++

// console.log(res)


//anti spiral 
let top = 0
let bottom = arr.length - 1

let left = 0;
let right = arr[0].length - 1;

let res = []
console.log(arr)

while(top <= bottom && left <= right){

    // left is fixed
    for(let i = top; i <= bottom; i++){
        res.push(arr[i][left])
    }
    left++

    // bottom is fixed
    for(let i = left; i <= right; i++){
        res.push(arr[bottom][i])
    }
    bottom--

    // right is fixed
    for(let i = bottom; i >= top; i--){
        res.push(arr[i][right])
    }
    right--

    // top is fixed
    for(let i = right; i >= left; i--){
        res.push(arr[top][i])
    }
    top++
}
console.log(res)