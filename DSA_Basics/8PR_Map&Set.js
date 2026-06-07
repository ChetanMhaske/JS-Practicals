/*
cons/ disadvantages of obj
the properties in obj are not ordered
we cannot directly traverse object
keys in obj are of 2 datatypes symbol and string we cannot have 
any other datatype
*/

// let arr = [1,2,3,4]

// let obj = {
//     name : "Abc",
//     age : 20,
//     "City" : "Pune"
// }
// console.log(obj)






///////////////////// Map //////////////////////

/*
A map is a built in collection of key value pairs 
unlike objects keys here can be of any datatype.

Map also prevents insertion order when iterated.
*/

// let map = new Map()


// // .set(key,value) is used to insert values inside map
// map.set("name","xyz")
// map.set('age',"20")
// map.set("name","abc")


// console.log(map)

// //.has(key) checks if that particular key exists or not
// console.log(map.has("city"))
// console.log(map.has("name"))

// //.get(key) lets you access the values
// console.log(map.get("age"))

// //.size gives you the length of your map
// console.log(map.size) // name is overridden so size will be 2 

// //.delete(key) allows you to remove a value
// //it returns true if deletion has happened
// map.delete("name")
// console.log(map)

// //used to clear your map
// map.clear()
// console.log(map)





// const userMap = new Map();
// const user1 = {id:1,name: "Aman"}
// const user2 = {id:2,name: "Sara"}

// userMap.set(user1,"Frontend student");
// userMap.set(user2,"Backend student");
// userMap.set(101,"Batch A");
// userMap.set(true,"Active Batch");

// console.log(userMap)

// /*
// Map(4) {
//   { id: 1, name: 'Aman' } => 'Frontend student',
//   { id: 2, name: 'Sara' } => 'Backend student',
//   101 => 'Batch A',
//   true => 'Active Batch'
// }
// */

// console.log(userMap.get(user1))
// console.log(userMap.get(101))
// console.log(userMap.get(true))



/* task
count the frequency in map
*/

// const words = ['js','react','js','node','react','js']

// const freqMap = new Map()

// for(word of words){
//     freqMap.set(word,(freqMap.get(word) || 0) + 1)
// }
// console.log(freqMap)






// this is another way of creating map,
// where key value pairs are in array

// const inventory = new Map([
//     ['pen',20],
//     ['notebook',10],
//     ['market',5],
// ])
// // console.log(inventory)

// for(item of inventory){
//     console.log(item)
// }
// // [ 'pen', 20 ]
// // [ 'notebook', 10 ]
// // [ 'market', 5 ]

// //remember to destructure your array inside your  for of loop
// for(const [key,value] of inventory){
//     console.log(key,value)
// }
// // pen 20
// // notebook 10
// // market 5




