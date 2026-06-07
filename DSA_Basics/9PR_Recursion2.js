/** Extract all the odd elements of array using recursion */

// let arr = [1,2,3,4,5]
// console.log(solution(arr))
// function solution(arr){

//     //here the recursive function becomes a helper functuin because
//     //it takes help from outer function
//     //(i.e it uses elements from outer function)
//     function oddElements(arr, n = 0){

//         if(n == arr.length ){
//             return arr
//         }
//         if(arr[n] % 2 === 0){
//             arr.splice(n,1)
//         }
//         return oddElements(arr,n + 1)
//     }

//     return oddElements(arr)
// }

// // Note: when your recursive function id independent of outside
// // variables and only dependent on the input that is given it becomes
// // a pure recursive function

// const threeDArray = [
//   [
//     [1, 2, 3],
//     [4, 5, 6]
//   ],
//   [
//     [7, 8, 9],
//     [10, 11, 12]
//   ]
// ];
// let arr = threeDArray.flat()
// // Access the number 8
// console.log(arr.flat());




// flatten the below array
// Most Important

// let arr = [1, [2, [3, 4], 5], [6, 7]];
// // output should be : [1,2,3,4,5,6,9]
// console.log(flattenArr(arr));

// function flattenArr(arr, n = 0) {
//     let res = []
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             res.push(...flattenArr(arr[i]))
//         }
//         else{
//             res.push(arr[i])
//         }
//     }
//     return res
    
// }





// fibonaci series
// 0 1 1 2 3 5 8
// let n = 5;
// console.log(fibo(n))
// // console.log(fibo(100))
// function fibo(n){
//     // if(n == 1) return 1
//     // if(n == 0) return 0

//     // or 
//     if(n < 2) return n

//     return fibo(n - 1) + fibo(n - 2)
// }// O(2^n) very bad time complexity



//pick each character as the first char
//recursively permute the remaining char
//combine the chosen char with each smaller permutation
// function permuteStr(str){
//     //when str has exactly 1 char ("c") their is only 1 possibility
//     if(str.length === 1){
//         return str
//     }
//     const res = []

//     //loop over watch char as the 1st char
//     for(let i = 0; i < str.length; i++){

//         //choose char at i to be the 1st char of permutation
//         const firstChar = str[i]

//         //build a new string that has all the characters except the one at i
//         //for e.g str = 'abc'
//         //i = 0: 1stChar = 'a',remg = "" + "bc" = "bc"
//         //i = 1: 1stChar = 'b',remg = "a" + "c" = "ac"
//         //i = 2: 1stChar = 'c',remg = "ab" + "" = "ab"
//         const remaining = str.slice(0,i) + str.slice(i+1)

//         //recursive call on the remaining elements
//         const permsOfStr = permuteStr(remaining);

//         //for i = 0
//         //1stChar = 'a',remg = "bc"
//         //permuteStr("bc")
//         //this recursive call will eventually return ["bc","cb "]
//         for(const perm of permsOfStr){
//             res.push(firstChar + perm)
//         }
//     }
//     return res
// }
// console.log(permuteStr("abc"))
