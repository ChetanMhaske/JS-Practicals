
// Math.round()
console.log(Math.round(4.4))
console.log(Math.round(4.5))

console.log(Math.round(-4.5))
console.log(Math.round(-4.6))

//Math.floor()
console.log(Math.floor(4.9))
console.log(Math.floor(-4.1))

//Math.ceil()
console.log(Math.ceil(4.9))
console.log(Math.ceil(-4.9))

//num.toFixed()
let num = 4.56789
console.log(num.toFixed(2)) //rounds to 2 decimal places
console.log(num.toFixed(0)) //rounds to nearest integer
console.log(num.toFixed(4)) //rounds to 4 decimal places

//parseInt("string")
console.log(parseInt("4.56789")) //returns 4
console.log(parseInt("4.9")) //returns 4
console.log(parseInt("hello")) //returns NaN
console.log(parseInt("123abc")) //returns 123
console.log(parseInt("abc123")) //returns NaN


//parseFloat("string")
console.log(parseFloat("4.56789")) //returns 4.56789
console.log(parseFloat("4.9")) //returns 4.9
console.log(parseFloat("hello")) //returns NaN
console.log(parseFloat("123.223abc")) //returns 123
console.log(parseFloat("abc123")) //returns NaN





//comparisons

console.log(3 > 2)
console.log(3 < 2)

// = vs == vs ===
console.log(a = 2) //assignment operator, assigns value of 2 to a 
console.log(3 == 2) //loose equality operator, checks if values are equal (false)
console.log(3 == "3") //loose equality operator, checks if values are equal (true) string to number conversion happens
console.log(3 === "3") //strict equality operator, checks if values and types are equal (false)


console.log("" == false)
console.log(null == false)
console.log(null == undefined)
console.log(NaN == undefined)
console.log(NaN == null)

console.log(3 != 2)
console.log(3 != "2") //loose inequality operator, checks if values are not equal (false) string to number conversion happens
console.log(3 !== "3") //strict inequality operator, checks if values and types are not equal (true)

console.log("Bee" < "bee")