// ascii value
let char = "A"
console.log(char.charCodeAt(0));

let num = 65
console.log(String.fromCharCode(num));

let message = "javascript is fun. javascript is powerful."


//replace function
console.log(message.replace("javascript", "js"));
console.log(message.replaceAll("javascript", "js"));


//question
let input="hi.I.am.sourav,.nice.to.meet.you"
console.log(input.replaceAll(".", " "));
console.log(input)

//split and join

console.log(input.split("."));

let input2="hi I am sourav nice to meet you"
console.log(input2.split(" "));

let result=input2.split(" ")
console.log(result.join("."));

let result2=input.split(".")
console.log(result2.join("-"));

let str ="national aeronautics space administration"
function acronym(str){
    
    let a=str.split(" ")
    // let b=a[0][0]+a[1][0]+a[2][0]+a[3][0]
    // console.log(b.toUpperCase())

    let result=""

    for(let i=0;i<a.length;i++){
        let word=a[i]
        let capitalLetter =word[0].toUpperCase()
        result=result+capitalLetter
    }
    return result


}
console.log(acronym(str))


//trim function

let name="     sourav      "
console.log(name)
console.log(name.trim())
console.log(name.trimStart())
console.log(name.trimEnd())

//padding
//used for masking values
//string.padStart(length of string , char you want to mask)
let code="56";
console.log(code.padStart(10,"*"))

console.log(code.padEnd(8,"*"))

//questions
//string reverse
let str1 = "hello"
function reverseStr(str1){
    // let a=str1.split("")
    // let b=a.reverse().join("")
    // return b

    let res=""
    for (let i=str1.length-1;i>=0;i--){
        res=res+str1[i]

    }
    return res
}
console.log(reverseStr(str1))


// //no of vowels
// let word="aeiou"
// let b=word.split("")
// console.log(b)
// let str2 = "asdesdisd"

// function vwls(str2){
//     let res=""
//     for(let i=0;i < str2.length;i++){
//         let letter=str2[i]
//         if(str2 == "a"|| str2 == "e"|| str2 =="i"|| str2 == "o"|| str2 == "u"){

//         }
//     }
// }

let str4 ="malayalam"
function checkpali(string){
    let reverse=string.split("").reverse().join("")
        if (string==reverse){
            return "String is palindrome"
        }
        else{
            return "String is not palindrome"
        }
    
}
console.log(checkpali(str4))

//convert sentence into camel case
//i/p=hello world
//output= Hello World

