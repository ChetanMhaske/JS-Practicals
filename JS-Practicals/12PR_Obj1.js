/////////////// Object.keys() and Object.values() //////////
// let obj = {
//     name : "Sourav",
//     age : 20,
//     Gender : "Male",
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// console.log(Object.keys(obj).length)

////////////////////////// tasks ///////////////////////////

/*
for any given object display all its values without using for in loop
*/

// let obj = {
//     name : "Sourav",
//     age : 20,
//     Gender : "Male",
// }
// let keys = Object.keys(obj)
// console.log(keys)
// for(let i = 0; i < keys.length; i++){
//     console.log(obj[keys[i]])
// }

/*
find sum of elements in object
*/

// let obj1 = {
//     mark1: 50,
//     mark2: 30,
//     mark3: 40,
//     mark4: 50,
// }

// let sum = 0;
// let arr = Object.values(obj1)
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)

/*
insert country: "India" inside given obj
*/

// let data = {
//     address: {
//         city: "Pune",
//         pin: 411014,
//     }
// }

// data.address.country = "India";
// console.log(data)

/////////////// array of object ////////////

// let arr = [
//   { id: 1, name: "Aman", marks: 82, gender: "male" },
//   { id: 2, name: "Sara", marks: 91, gender: "female" },
//   { id: 3, name: "Rohit", marks: 25, gender: "male" },
//   { id: 4, name: "Sachin", marks: 100, gender: "male" },
//   { id: 5, name: "Shreya", marks: 30, gender: "female" },
//   { id: 6, name: "Astha", marks: 99, gender: "female" },
// ];

/*
1 print the name of all students
2 print name of all female students
3 print the name of male students who got below 50
*/

// // 1
// console.log("All students: \n")
// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i].name)
// }

// // 2
// console.log("\nFemale students: \n")
// for(let i = 0; i < arr.length; i++){
//   if(arr[i].gender === "female"){
//     console.log(arr[i].name)
//   }
// }

// //3
// console.log("\nMale students with marks < 50 : \n")
// for(let i = 0; i < arr.length; i++){
//   if(arr[i].gender === "male" && arr[i].marks < 50){
//     console.log(arr[i].name)
//   }
// }





//////////////// object destructuring ////////////////////

// let user = {
//   name : "prisha",
//   age :  23,
//   city : "pune"
// }

// let name = user.name
// let age = user.age

// let {name,age,city} = user
// console.log(name)
// console.log(age)
// console.log(city)




// let product = {
//   title: "phone",
//   price: 30000
// }

// // desstructuring using the name of some other variable
// let {title:productTitle,price:productPrice} = product
// let {title,price} = product

// console.log(productTitle,productPrice)





// let profile = {
//   uname : "neo",
//   address:{
//     city:"pune",
//     pin:411057,
//   },
// }
// let {address} = profile
// console.log(address.city)






//////////// tasks //////////////////

// let people = [
//   {name:"Alice",city:"NYC"},
//   {name:"Bob",city:"LA"},
//   {name:"Charlie",city:"NYC"},
// ]


// let obj = {

// }

// for(let i = 0; i < people.length; i++){
//   let city = people[i].city;
//   if(!obj[city]){
//     obj[city] = [];
//   }
//   obj[city].push(people[i])
// }
// console.log(obj)







function wordCount(string){
  let obj = {

  }
  string = string.toLowerCase()
  let arr = string.split(" ")
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(!obj[arr[i]]){
      obj[arr[i]] = 1
    }
    else{
      obj[arr[i]]++
    }
  }
  console.log(obj)
}
wordCount("hello world hello hello")