// task create 4 functions for +, -, *, /

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0){
        return a / b;
    }
    return "Error: Division by zero is not allowed.";
}
function calculator(a,b){
    console.log("Addition : ",add(a,b))
    console.log("Subtraction : ",subtract(a,b))
    console.log("Multiplication : ",multiply(a,b))
    console.log("Division : ",divide(a,b),"\n","-----------------------------")
}
calculator(10,5)
calculator(20,20)
calculator("30","10")
calculator("30",10)
calculator(30,"10")
calculator("Hello","World")
calculator(10,0)
calculator(0,10)
calculator(0,0)

let user = "john"
function changeUserName(){
    user = "Bob"
    console.log("User name changed to:", user)
}
console.log("Before function call:", user)
changeUserName()
console.log("After function call:", user,"\n","-----------------------------")

let username = "xyz"
function usrName(username){
    console.log("In function before changing value",username)
    username = "abc"
    console.log("In function after changing value",username)
}
usrName(username)
console.log("Outside function",username,"\n","-----------------------------")

let l = 4
let w = 5
function areaOfRectangle(length=5, width=7){
    console.log("Area of rectangle:", length * width)
}
areaOfRectangle(l, w)
areaOfRectangle(l,)
areaOfRectangle()


console.log("-----------------------------")
let length = 5
let width = 10
function area(l,w) {
    let a = l * w
    return a
    //anything after return statement will not be executed
    console.log("This will not be printed")
}
let area1 = area(length,width)
console.log("Area of rectangle:", area1)