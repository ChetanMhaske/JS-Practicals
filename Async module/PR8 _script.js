// class User{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
// }

// function printUser(user){
//     console.log(`User name is: ${user.name}`)
// }
// function printAge(user){
//     console.log(`User age is: ${user.age}`)
// }

// export default User

// export {printUser,printAge}

// export default class User{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
// }

// export function printUser(user){
//     console.log(`User name is: ${user.name}`)
// }
// export function printAge(user){
//     console.log(`User age is: ${user.age}`)
// }


// DSA leetcode problem 
let groupAnagrams = function(strs) {
    
    let map = {}
    for(let i = 0; i < strs.length; i++){
        let str = strs[i].split('').sort().join('');

        if(!map[str]){
            map[str] = []
            
        }

        map[str].push(strs[i])
    }
    console.log(Object.values(map))
};
groupAnagrams(["eat","tea","tan","ate","nat","bat"])