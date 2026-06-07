// for(let i = 0; i <= 5; i++){
//     console.log(i)
// }





// Call Stack overflow

// function f(n){
//     console.log(n)
//     f(n)
// }
// console.log(f(5)) //angeError: Maximum call stack size exceeded






// function f(count){
//     if(count == 4){
//         return
//     }
//     console.log(count)
//     count++
//     f(count)
// }
// f(1)






// function countDown(n){

//     if(n == 0){
//         return 
//     }
//     //Forward
//     console.log(n)
//     countDown(n - 1);
//     // Backtracking / Backward or we can say removing 
//     // elements from call stacks one by one
//     console.log(n)

// }
// countDown(3)






// function countUp(n){
//     if(n == 6){
//         return
//     }
//     console.log(n)
//     countUp(n + 1)
// }
// countUp(1)






// // calculate the sum of 1+2+3+4+5
function countSum(n){
    
    if(n == 1){
        return 1
    }
    return n * countSum(n - 1)
}
console.log(countSum(5))







// 2^k

function power(base,exponent){
    // return base ** exponent
    if(exponent == 0){
        return 1
    }
    return base * power(base, exponent - 1)
}
console.log(power(2,4))






// find sum of array elements using recursion

// let arr = [1,2,3,4,5]

// function sumOfArr(n){
    
//     if(n.length == 0){
//         return 0
//     }
    
//     return n[0] + sumOfArr(n.slice(1))
    
// }
// console.log(sumOfArr(arr))






// function sumOfArr(arr,n){
    
//     if(n == -1){
//         return 0
//     }
    
//     return arr[n] + sumOfArr(arr,n - 1)
    
// }
// console.log(sumOfArr(arr,arr.length - 1))






/* 
Problems 

1 Sum of natural numbers
2 Prime Numbers Range
*/ 

// 1 Sum of natural numbers
// function NumberSum(N) {
//   //Write your code here
//   if(N == 0){
//     return 0
//   }
//   return N + NumberSum(N - 1)
// }
// console.log(NumberSum(6)) // 21





// let n = 10
// function primeRange(num, divisor = Math.floor(Math.sqrt(num))){
//     if (num <= 1) return false;
//     if (divisor === 1) return true;
//     if (num % divisor === 0) return false;
//     return primeRange(num,divisor - 1)
// }
// for(let i = 1; i <= Number(n); i++){
//     if(primeRange(i)){
//       console.log(i)
//     }
// }
// primeRange(n)






// if (n <= 1) {
//     console.log("Number is not prime and lesser than or equal to 1");
// } 
// else {
//     let isPrime = true;
//     let limit = Math.floor(n ** 0.5);

//     // Loop through all possible factors from 2 up to the square root
//     for (let i = 2; i <= limit; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break; // Stop looping immediately if a factor is found
//         }
//     }

//     if (isPrime) {
//         console.log("Prime");
//     } else {
//         console.log("Not prime");
//     }
// } 







function pattern(n,row = 1){
    if(row > n){
        return
    }
    let star = ""
    for(let i = 0; i < row; i++){
        star += "* "
    }
    
    console.log(star)
    pattern(n,row + 1)
}
pattern(5)






//find maximum in the array using recursion

// let arr = [1,5,3,4,7,2]
// let max = arr[0]
// function maxInArr(arr,i=1){
//     if(i == arr.length){
//         return max
//     }
    
//     if(max < arr[i]){
//         max = arr[i]
        
//     }
//     return maxInArr(arr,i + 1)
    
// }
// console.log(maxInArr(arr))




// Reverse a string using recursion

// let str = "Acciojob"
// let revstring = ""
// function revStr(str,i = str.length - 1){
//     if(i == -1){
//         return revstring
//     }
//     revstring += str[i]
//     return revStr(str,i - 1)
// }
// console.log(revStr(str))