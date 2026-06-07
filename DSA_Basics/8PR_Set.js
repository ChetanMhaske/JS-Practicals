/////////////////// Set ////////////////////

// const set  = new Set();
// set.add(10)
// set.add(20)
// set.add(10)
// set.add(30)
// console.log(set)


// console.log(set.has(10))
// console.log(set.size)
// set.delete(30)
// console.log(set)
// console.log(set.size)
// set.clear()
// console.log(set)


/*
remove duplicates from array
*/
// let username = ["abc",'xyz','abc','pqr','xyz']

// //1st way to do this
// let set = new Set();
// for(item of username){
//     set.add(item)
// }
// console.log(set)


// //2nd Way and ideal way
// let set2 = new Set(username)
// console.log([...set2])







// const A = new Set(['a','b','c'])
// const B = new Set(['b','c','d'])

// // union()
// const C = A.union(B);
// console.log(C)
// //Set(4) { 'a', 'b', 'c', 'd' }


// // intersection()
// const D = A.intersection(B);
// console.log(D)
// //Set(2) { 'b', 'c' }


// // difference() A-B and B-A
// const E = A.difference(B) // a
// const F = B.difference(A) // d
// console.log(E)
// console.log(F)


// // isSubsetOf()
// console.log(A.isSubsetOf(B)) // false

// const A1 = new Set(['a','b','c'])
// const B1 = new Set(['b','c'])
// console.log(B1.isSubsetOf(A1)) //true





/*
for a given string check if all characters are unique or not
*/

// let input = "abc"

// let arr = input.split("")

// let set = new Set(arr)
// // let set = new Set(input) //we can also pass string which gets split also

// if(set.size == input.length){
//     console.log("string is unique")
// }
// else{
//     console.log("string is not unique")
// }
// // console.log(set)



/*
convert a below object into Map
*/
let obj = {
    name: "Abc",
    age: 20,
    gender: "Male",
}


//method 1
// let arr = Object.entries(obj)
// let map = new Map(arr)
// console.log(map)


//method 2
const map1 = new Map()
for(let key in obj){
    map1.set(key,obj[key])
}
console.log(map1)