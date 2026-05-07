// let i = 10
// let res
// while (i >= 1) {
//     res = i * 2
//     console.log(`${i} x 2 = `,res)
//     i--
// }

// let i = 5
// while(i >=1){
//     console.log(i)
//     i--
// }

// let i = 20
// while(i <= 40){
//     if(i % 2 === 0){
//         console.log(i)
//     }
//     i++
// }

// let i = 0
// while(i < 10){
//     if(i % 2 === 0){
//         console.log(i)
//     }
//     i += 2
// }

// let i = 0
// do{
//     console.log(i)
//     i++
// }while (i < 6)


// for(let i = 0; i < 3; i++){
//     console.log(i)
// }


// let i = 0
// for(; i < 3; i++){
//     console.log(i)
// }

// let i = 0
// for(; i < 3;){
//     console.log(i)
//     i++
// }

// let i = 0
// for(;i < 3;){
//     console.log(i)
//     i++    
// }


// let i = 0
// console.log(i++)
// console.log(i)

// for(let i = 0; i < 5; ++i){
//     console.log("H")
//     if(i === 2){
//         break
//     }
//     console.log(i)
// }

// for(let i = 0; i < 5; ++i){
    
//     if(i === 2){
//         continue
//     }
//     console.log(i)
// }







/*

Questions 
1  you are given a number n find the number of digits in n
e.g n = 1234
output = 4

2 given a number n find the sum of its digits
e.g n = 572
output = 14 (5 + 7 + 2)

3 find the first number that is divisible by 7 and 5 using loop
the number will be in the range of 1 to 500

*/

//1


// let n = 12345
// let count = 0
// while(n > 0){
//     n = Math.floor(n / 10)
//     count++
// }
// console.log(count)

// let n = 12345
// let count = 0
// let remainder
// while(n > 0){
//     remainder = n % 10
//     n = n - remainder
//     n = n / 10
//     count++
// }
// console.log(count)




// //2
// let n = 572
// let sum = 0
// let remainder
// while(n > 0){
//     remainder = n % 10
//     n = n - remainder
//     n = n / 10
//     sum = sum + remainder //sum += remainder
// }
// console.log(sum)


//multiplication of digits
// let n = 572
// let mul = 1
// let remainder
// while(n > 0){
//     remainder = n % 10
//     n = n - remainder
//     n = n / 10
//     mul = mul * remainder //mul *= remainder
// }
// console.log(mul)

//3
// for(let i = 1; i <= 500; i++){
//     if (i % 7 === 0 && i % 5 === 0){
//         console.log(i)
//         return
//     }
// }


let count = 0
for(let i = 1; i <= 500; i++){
    if (i % 7 === 0 && i % 5 === 0){
        if(count === 4){
            return
        }
        console.log(i)
        count++
    }
}

//////table of given number

// let n = 5
// // for(let i = 1;i<=10; i++){
// //     let a=n * i
// //     console.log(`${n} x ${i} =`,a)
// // }

// let n = 10
// let i = 1
// while(i <= 10){
//     let a = n * i
//     console.log(`${n} x ${i} =`,a)
//     i++
// }


// for(let i = 0; i<5; ){
//     console.log(i++)
// }

// for(let i = 0; i<5; ){
//     console.log(++i)
// }


////////////number is prime or not
// class Solution {
//     isPrime(n) {
//         // code here
//         if(n <= 1){
//             return false
//         }
//         else{
//             for(let i = 2; i*i <= n; i++){
//                 if(n % i === 0){
//                     return false
//                 }
        
//             }
//             return true
//         }
//     }
// }
// let obj = new Solution();
// obj.isPrime(7)
