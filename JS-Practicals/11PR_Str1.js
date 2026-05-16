//////////////ASCII Value/////////////

// " " = 32 Ascii value for space
// let str = "A"
// console.log(str.charCodeAt(0)) //65

// let ASCII_Val = 65
// console.log(String.fromCharCode(ASCII_Val))





//////////////// replace() and replaceAll() /////////////

// let msg = "javascript is fun. javascript is powerfull"

// // replace only 1st appreance of the javascript to JS
// console.log(msg.replace("javascript","JS"))

// // replaces all the appereamces of the javascript to JS in message
// console.log(msg.replaceAll("javascript","JS"))



//////////task/////////
// convert this sentence to normal
// let sent = "hi.I.am.sourav,.nice.to.meet.you" 

// console.log(sent.replaceAll("."," "))




////////////////split and join////////////////



// let ip1 = "hi.I.am.sourav,.nice.to.meet.you" 
// console.log(ip1.split("."))
// console.log(ip1.split("")) //it will give all characters present in string
/* output:
[
  'hi',   'I',
  'am',   'sourav,',
  'nice', 'to',
  'meet', 'you'
]
*/



// let ip2 = "hi I am sourav, nice to meet you"
// console.log(ip2.split(" ")) //it will give all words present in string
/* output:
[
  'hi',   'I',
  'am',   'sourav,',
  'nice', 'to',
  'meet', 'you'
]
*/



// let ip1 = "hi.I.am.sourav,.nice.to.meet.you" 
// let res = ip1.split(".")
// console.log(res.join(" "))
// output: hi I am sourav, nice to meet you









/////////////////task/////////////////
/*
create an acronym generator
"National aeronautics space administration"
to
"NASA"
*/


// let str = "indian space research organization"

// function acronym(string){
//     let arr = string.split(" ");
//     let res = ""
//     for(let i = 0; i < arr.length; i++){
//         res += arr[i][0] // res = res + arr[i][0]
//     }
//     return res.toUpperCase()
// }
// console.log(acronym(str))




// function acronym(string){
//     let arr = string.split(" ");
//     let res = ""
//     for(let i = 0; i < arr.length; i++){
//         let word = arr[i];
//         let capLetter = word[0].toUpperCase()
//         res = res + capLetter;
//     }
//     return res 
// }
// console.log(acronym(str))







//////////////////////trim///////////////////

// let name = "           abc xyz                "
// console.log(name)
// console.log(name.trim())
// console.log(name.trimStart())
// console.log(name.trimEnd())




////////////////padding/////////////////

// let code = "56"

// console.log(code.padStart(10,"*"))
// console.log(code.padEnd(8,"0"))
// console.log(code.padEnd(8,"asdasdas"))







///////////////tasks////////////////////
/*
print reverse of a string

for the given string count the number of vowels

given string is palindrome or not (true or false)

convert a sentence into camel case
*/



/////////////////////reverse/////////////////

// let str = "Hello"
// function stringReverse(string){
//     let strRev = "";
//     for(let i = string.length-1; i >= 0; i--){
//         strRev += string[i];
//     }
//     return strRev
// }
// console.log(stringReverse(str))



// let str = "Hello"
// function strRev(string){
//     let revStr = str.split("").reverse().join("")
//     console.log(revStr)
// }
// strRev(str)



////////////////////vowels//////////////////////

// let str = "aeiou xyz"
// function countVowels(string){
//     let count = 0
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === 'a'|| string[i] === 'e'|| string[i] === 'i'|| string[i] === 'o'|| string[i] === 'u'){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowels(str))



/////////////////palindrome////////////////////
// let str = "malayalam"
// function checkPalindrome(string){
//     let revStr = string.split("").reverse().join("")
//     if(string === revStr){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(checkPalindrome(str))



/////////////////camel case//////////////////
// let str = "hellO worlD"
// function camelCase(string) {
//     let arr = string.split(" ");

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
//     }

//     return arr.join(" ");
// }
// console.log(camelCase(str));