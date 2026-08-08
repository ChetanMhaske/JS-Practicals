// this => it refers to the object or the context where the current 
// code is executing

// let obj = {
//     name: "xyz",
//     greet: function(){
//         console.log("greet")
//         console.log(obj.name)
//         console.log(this.name)
//         console.log("Hello "+this.name)
//         console.log("Hello "+obj.name)
//     },
//     a:5,
//     b:6,
//     sum: function(){
//         console.log(this.a + this.b)
//     },
//     mul(){
//         console.log(this.a * this.b)
//     }
// }

// obj.greet();
// obj.sum();
// obj.mul()


// function func(){
//     console.log(this)
// }
// func();


// let obj = {
//     name: "abc",
//     obj1:{
//         name:"pqr",
//         func1(){
//             console.log(this.name)
//         }
//     }
// }
// obj.obj1.func1();




// function func(){
//     console.log(this.name)
//     // console.log(obj1.name) // it will only give obj1.name == abc for obj 2.greet() also
// }

// let obj1 = {
//     name:"abc",
//     greet:func
// }
// obj1.greet()

// let obj2 = {
//     name:"xyz",
//     greet:func
// }
// obj2.greet()



// const person1={
//     name:"Amit",
//     age:30
// }
// const person2={
//     name:"Om",
//     age:32
// }

// function introduce(city,country){
//     return `${this.name} is ${this.age} years old from ${city}, ${country}`
// }

// // call()
// console.log(introduce.call(person1,"Pune","India"))
// // apply()
// console.log(introduce.apply(person2,["Kashi","India"]))
// // bind()
// const introducePerson1 = introduce.bind(person1)
// console.log(introducePerson1("Pune","India"))
/*
call bind apply

In js call bind apply are built in methods used to explicitely set the execution context i.e sets the this
inside a function in simple words -> they allow us to borrow the this of object to be used inside a function
*/






// const counter = {
//     count: 0,
//     increment: function(){
//         this.count++;
//         console.log(this.count)
//     }
// }

// let func = counter.increment.bind(counter)
// func()







// When you pass callback function as a function declaration this will 
// be your window object but you can fix it using an arrow function

// Arrow function do not have their own this they borrow it from the 
// enclosing scope
const user = {
    name: "amit",
    hobbies: ["reading", "coding", "gaming"],
    // showHobbies: function(){
    //     this.hobbies.forEach(function(hobbii){
    //         console.log(this.name + " likes " + hobbii)
    //     })
    // }
    showHobbies: function(){
        this.hobbies.forEach((hobbii) => {
            console.log(this.name + " likes " + hobbii)
        })
    }
}
user.showHobbies()