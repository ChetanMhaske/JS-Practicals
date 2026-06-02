// let arr = [1,{name:"abc"}]
// console.log(arr[arr.length-1].name)
// let arr = [1,["abc"]]
// console.log(arr[1][0])


// let arr = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(arr[0][0])
// console.log(arr[0][1])
// console.log(arr[0][2])
// console.log(arr[1][0])
// console.log(arr[1][1])
// console.log(arr[1][2])
// console.log(arr[2][0])
// console.log(arr[2][1])
// console.log(arr[2][2])




// task below is the given array insert elements into it so the result 
// looks like arr2
// let arr2 = [[1,2,3],[4,5,6],[7,8,9]]

// let arr = []
// let count = 0;
// for(let i = 0; i < 4; i++){
//     let innerArr = []
//     for(let j = 0; j < 3; j++){
//         count++;
//         innerArr.push(count)
//     }
//     arr.push(innerArr)
// }
// console.log(arr) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// console.table(arr)



/*
1 print the elements rowwise : 1,2,3,4,5,6,7,8,9
2 print the elements column wise : 1,4,7,2,5,8,3,6,9
3 print the diagonal elements of the square matrix : 1,3,5,7,9
4 print the non diagonal elements of the square matrix : 2,4,6,8
5 find the center element of the square matrix: 5
*/

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


// 1 print the elements rowwise : 1,2,3,4,5,6,7,8,9
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j])
    }
}

console.log("\n")



// 2 print the elements column wise : 1,4,7,2,5,8,3,6,9
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        console.log(arr[j][i])
    }
}
console.log("\n")



// 3 print the diagonal elements of the square matrix : 1,3,5,7,9
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(i == j || i + j == arr.length -1){
            console.log(arr[i][j])
        }
    }
}

console.log("\n")


//4 print the non diagonal elements of the square matrix : 2,4,6,8

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if(i == j || i + j == arr.length -1){
//             continue;
//         }
//         else{
//             console.log(arr[i][j])
//         }
//     }
// }
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(!(i == j || i + j == arr.length -1)){
            console.log(arr[i][j])
        }
    }
}


console.log("\n")


// 5 find the center element of the square matrix: 5
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(i == j && i + j == arr.length -1){
            console.log(arr[i][j])
        }
    }
}


