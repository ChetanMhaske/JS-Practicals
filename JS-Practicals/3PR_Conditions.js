// let age = 10
// if(age >= 18) {
//     console.log("You can Vote");
// }
// else{
//     console.log("You cannot Vote");
// }

////Ternary operator method used in react
// age >= 18 ? console.log("You can Vote") : console.log("You cannot Vote");


//example 2
/*
if(age) {
    if(age >= 18) {
        console.log("You can Vote");
    }
    else{
        console.log("You cannot Vote");
    }
}
else{
    console.log("You've entered invalid number");
}
*/

// let msg = age ? "You've entered valid number\n" + (age >= 18 ? "You can Vote" : "You cannot Vote") : "You've entered invalid number";
// console.log(msg)


// let score = 55
// if(score >= 90) {
//     console.log("Grade A");
// }
// else if(score >= 80) {
//     console.log("Grade B");
// }       
// else if(score >= 70) {
//     console.log("Grade C");
// }
// else if(score >= 60) {
//     console.log("Grade D");
// }
// else{
//     console.log("Grade F");
// }


// let msg = score >= 90 ? "Grade A" : score >= 80 ? "Grade B" : score >= 70 ? "Grade C" : score >= 60 ? "Grade D" : undefined;
// console.log(msg)


///////////////////questions///////////////////
/*
1 you are give a number n and you have to print if it is positive, negative or zero
2 you are give a number n it can be decimal -> check if its integer part is even or odd
3 yor are given 3 numbers a,b,c now you have to print the greatest number among them
*/


//1
// let num=-10
// if(num > 0) {
//     console.log("Positive");
// }
// else if(num < 0 ){
//     console.log("Negative")
// }
// else{
//     console.log("Zero")
// }

//2
// let num=10.4
// if(Math.floor(num) % 2 == 0){
//     console.log("Even Number")
// }
// else{
//     console.log("Odd Number")
// }


//3

let a = 16, b = 20, c = 21

if((a > b) + (a > c) ){
    console.log("a is greater than b and c")
}
else if((b > a) + (b > c)){
    console.log("b is greater than a and c")
}
else{
    console.log("c is greater than a and b")
}

// if(a > b){
//     if(a > c){
//         console.log("a is greater than b and c")
//     }
//     else{
//         console.log("c is greater than a and b")
//     }
// }
// else{
//     if(b > c){
//         console.log("b is greater than a and c")
//     }           
//     else{
//         console.log("c is greater than a and b")
//     }
// }