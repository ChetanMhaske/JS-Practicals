// let student = { name: "Riya", marks: 85 }
// let obj = { ...student }
// console.log(obj)

// let obj1 = { ...student, gender: "female" }
// console.log(obj1)

// let obj2 = { ...student, marks: 95 }
// console.log(obj2)

// let obj3 = { marks: 100, ...student }
// console.log(obj3)



//shallow copy

// let object1 = {
//     a: 'a',
//     b: "b",
//     c: {
//         see: "c"
//     }
// }
// let object2 = { ...object1 }//shallow copy
// object2.a = "A"

// object2.c.see = "C"
// console.log(object1)
// console.log(object2)





// let object3 = {
//     a: 'a',
//     b: "b",
//     c: {
//         see: "c"
//     }
// }
// method 1 for deep copy stringify dose not preserve all datatypes correctly

// let object4=JSON.parse(JSON.stringify(object3))

// object4.c.see="C"
// console.log(object3)
// console.log(object4)





// //method 2 for deep clone this is more efficient and ideal way to make deep copy

// object5=structuredClone(object3)
// object5.c.see="C"
// console.log(object3)
// console.log(object5)


//////////destructuring array and objects////////////////

let fruits=["apple","banana","orange","grapes"]
const [first,second,third]=fruits
console.log(first)//apple
console.log(second)//banana
console.log(third)//orange


// let nums=[10,20,30,40,50]
// let [a,,c,d,e]=nums
// console.log(a)//10
// console.log(c)//30
// console.log(d)//40
// console.log(e)//50


//here we are using rest operator which is applied on multiple values
let nums=[1,2,3,4,5]
let [one,two,...remaining]=nums
console.log(one)//1
console.log(two)//2
console.log(remaining)//[3,4,5]



////object destructuring////

let student={
    name:"arjun",
    age:21,
    course:"JS"
}
// let {name,age}=student
// console.log(name)//arjun
// console.log(age)//21

let {name:studentName,age:studentAge}=student
console.log(studentName)//arjun
console.log(studentAge)//21

let employee={
    id:101,
    address:{
        city:"pune",
        state:"MH"
    }
}
let {id,address:{city,state}}=employee
console.log(id)//101
console.log(city)//pune
console.log(state)//MH