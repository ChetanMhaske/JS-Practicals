// let str = "Hello"
// console.log(str.charAt(1))
// console.log(str[-1]) // undefined
// console.log(str.charAt(-1)) // empty string



// let str = "Hello"
// console.log(str.at(0))
// console.log(str.at(-1))



//////////// Backslash error ["\"]//////////////
// //console.log("\"); //error
// console.log("\\"); //output: \

//////////// '' / "" error//////////////
// console.log("Hi i'm "Abc"") // error
// console.log("Hi i'm \"Abc\"") // output: Hi i'm "Abc"

// // console.log('Hi i'm Abc') // error
// console.log('Hi i\'m Abc')



// let fruits = `fruits : 
//     * apple
//     * bannana
//     * kiwi
// `
// console.log(fruits)




/////////////// Strings are not mutable ///////////////


// let str = "Hello"
// str[0] = "h" // This will not change the string
// console.log(str) // Output: "Hello"

// let arr = ["H", "e", "l", "l", "o"]
// arr[0] = "h" // This will change the array
// console.log(arr) // Output: ["h", "e", "l", "l", "o"]


////////////// upperCase() and lowerCase() ///////////////

// let str = "hello"
// console.log(str.toUpperCase()) // Output: "HELLO"

// let str2 = "hello"
// let strU = `${str2[0].toUpperCase()}${str2.slice(1)}`
// // let strU = str2[0].toUpperCase() + str2.slice(1)
// console.log(strU)


// let STR = "HELLO"
// console.log(STR.toLowerCase())




////////task///////////
// you aare given a string convert it into camel case implement the 
// function to do this


// function fun(str = "jAVAsCript"){
//     let str1 = str[0].toUpperCase();
//     for(let i = 1; i < str.length; i++){
//         str1 += str[i].toLowerCase()        
//     }
//     console.log(str1)
// }
// fun("the")


// function fun(str){
//     console.log(str[0].toUpperCase() + str.slice(1).toLowerCase())
// }
// fun("jAVAsCript")


// function fun(str){
//     str = str.toLowerCase()
//     console.log(str[0].toUpperCase() + str.slice(1))
// }
// fun("jAVAsCript")





/////////indexOf and includes//////////////

// let str2 = "Widget with id";
// console.log(str2.indexOf("Widget"))
// console.log(str2.indexOf("with"))
// console.log(str2.indexOf("id",2))


// console.log(str2.includes("Widget "))
// console.log(str2.includes("with id "))



/////////startsWith & endsWith//////////////

// let str = "Widgets with id"
// console.log(str.startsWith("Wid"))
// console.log(str.endsWith("id"))








////////////slice OR substring OR substr////////////////////
// let str = "stringify"
// console.log(str.slice(0,5)) // strin
// console.log(str.slice(5)) // gify
// console.log(str.slice(-4,-1)) //gif


// console.log(str.substring(6,2)) //ring


// console.log(str.substr(2,5)) // ringi
// console.log(str.substr(-4,3)) // gif

