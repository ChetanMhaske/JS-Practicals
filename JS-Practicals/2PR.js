let a = 100
let b = 30
console.log(a % b) 

//unary operator 
x=1
x=-x
console.log(x)

//priority of operators
let res = 2 + 3 * 4 - 5
console.log(res)

let result = 5 + 10 * 2 / 5 - 3
console.log(result)

let result1 = 2 + 3 * ( 4 - 1 ) / 3 + 5;
console.log(result1)

let result2 = 50 / 2 - 10 * 2 + 5 * 3 / 3
console.log(result2)

console.log(true+true)
console.log(false+false)

let str1 = "Hello"
let str2 = " World"
console.log(str1 + str2)




console.log(6 - "4") //string is converted to number
console.log("6" * "4") //both strings are converted to numbers
console.log("6" + "4") //both are treated as strings and concatenated
console.log("6" / "2") //both strings are converted to numbers
console.log("6" * "a") //"a" cannot be converted to a number, so it becomes NaN (Not a Number) and any operation with NaN results in NaN

console.log(+true)
console.log(+false)
console.log(+"") //empty string is converted to 0
console.log(+" ") //string with only whitespace is also converted to 0
console.log(+"abc") //string that cannot be converted to a number results in NaN
console.log(+undefined) //undefined is converted to NaN
console.log(+null) //null is converted to 0
console.log("" - 1 + 0)




///////////////////////assignment operator////////////////

let d = 1
let e = 2
let c = 3 - (d = e + 1)

console.log(d)
console.log(c)

// let a1, b1, c1;
// a1 = b1 = c1 = 2 + 2

let a1 = 5
a1 = a1 + 2  // a1 += 2 can also be used for the same purpose
a1 = a1 + 5  // a1 += 5 can also be used for the same purpose
console.log(a1)

let n = 2
n *= 3 + 5
console.log(n)


let A = 5
// let B = A++
// console.log(B)
// console.log(A)

let C = 5
let D = ++C
console.log(D)
console.log(C)


console.log(parseInt(8**1/3))


let X = (5 + 3) / A++
console.log(X)

///////questions/////////
console.log("" + 1 + 0)//10
console.log("" - 1 + 0)//-1
console.log(true + false)//1
console.log(6 / "3")//2
console.log("2" * "3")//6
console.log(4 + 5 + "px")//9px

