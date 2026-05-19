// let personArr = ["sourav", 20, "Male", {salary:200000}]
// console.log(personArr)
// console.log(personArr[personArr.length - 1].salary)




// Object
// let person = {
//     name : "Sourav",
//     age : 20,
//     Gender : "Male",
//     Groups : ["A","B","C"], // array inside an object
//     obj : {a:"abc",b:"xyz"} // object inside object or nested object
// }

// // accessing values from object

// console.log(person.name) //person["name"]
// console.log(person.age)  //person["age"]
// console.log(person.Gender)  //person["Gender"]

// console.log(person["Groups"])
// console.log(person.obj["a"])

// let key = "name"
// console.log(person.key)
// console.log(person[key])





// let obj = {
//     1 : "Sourav",
//     age : 20,
//     Gender : "Male",
//     "likesBirds" : true, // key can also be string
//     "likes Animals" : false
// }

// console.log(obj[1])
// console.log(obj.likesBirds)
// console.log(obj["likesBirds"])
// console.log(obj["likes Animals"]) // cant access key strings like these with .operator




// let obj = {
//     name : "Sourav",
//     age : 20,
//     Gender : "Male",
// }

// obj.name = "GHOST"
// console.log(obj)




/* Questions/Tasks

1 print the value 8 in points in the below object
2 print 50 from the object below

*/


// let obj = {
//     name : "Sourav",
//     age : 20,
//     Gender : "Male",
//     point : [1,8,5,15],
//     points : {
//         first : 100,
//         Second : 50,
//         Third : 80,
//     },
// }

// console.log(obj.point[2])
// console.log(obj["point"][2])


// console.log(obj.points.Second)
// console.log(obj.points["Second"])
// console.log(obj["points"]["Second"])





// let obj = {
//     name : "Sourav",
//     age : 20,
//     Gender : "Male",
//     point : [1,8,5,15],
//     points : {
//         first : 100,
//         Second : 50,
//         Third : {
//             innerpoint : {
//                 key : "values"
//             }
//         }
//     },
// }

// console.log(obj.points.Third.innerpoint.key)






// let obj = {

// };
// obj.name = "Abc"
// obj.age = 20
// obj.gender = "male"
// console.log(obj)





// let obj = {
//     name : "Sourav",
//     age : 20,
//     Gender : "Male",
//     key : "Value"
// }
// console.log(obj)
// delete obj.key
// console.log(obj)






// key exceptions

// let obj = {
//     "one":1,
//     "two":2,
//     "three":3,
// }
// console.log(obj["one"])
// console.log(obj.one)

// let obj = {
//     1:1,
//     2:2,
//     3:3,
// }
// console.log(obj["1"])
// console.log(obj[1])



/////// in operator /////////

// let obj = {
//     name : "Sourav",
//     age : 20,
//     Gender : "Male",
// }

// console.log("Gender" in obj)
// console.log("value" in obj)

// let obj = {
//     key : undefined,
// }
// console.log(obj.key)
// console.log("key" in obj)






////// for in loop ///////////
// it will give keys present in object
// let obj = {
//     name : "Sourav",
//     age : 20,
//     Gender : "Male",
//     keys : "value"
// }
// for(let key in obj){
//     console.log(key,obj[key])
// }

////// for of loop gives the values present in array ////
////// for in loop gives all index numbers from array ////
// let arr = [1,2,3,4,5]
// for(let a of arr){
//     console.log(a)
// }
// for(let a in arr){
//     console.log(a)
// }