// let arr = [1,2,15]
// arr.sort();
// console.log(arr)



// Note: arr.sort() uses Timsort algo which is hybrid of merge 
// and insertion sort
// Best Case: O(n) -> if array is already sorted
// Worst Case: O(n log n)




// sort() sorts in way of string so in between 2 and 15 it will
// check one by one index wise serially 2 with 1,5 so 2 is greater
// than 1 so 15 comes 1st

// to use your own sorting order we need to supply function as the
// argument of arr.sort()

// ascending order
// function compareAsc(a,b){
//     if(a > b) return 1;
//     if(a == b) return 0;
//     if(a < b) return -1;
// }

// // descending order
// function compareDesc(a,b){
//     if(a < b) return 1;
//     if(a == b) return 0;
//     if(a > b) return -1;
// }

// let arr = [1,2,15,3]
// arr.sort(compareDesc);
// console.log(arr)

//ascending
// let arr = [1,-2,15,2,0,8]
// arr.sort(function(a,b){
//     // console.log(a + " <> " + b)
//     return a - b
// })
// console.log(arr)

//descending
// let arr = [1,-2,15,2,0,8]
// arr.sort(function(a,b){
//     // console.log(a + " <> " + b)
//     return b - a
// })
// console.log(arr)

// let students = [
//     {name : "Abc", marks : 50},
//     {name : "Abc", marks : 20},
//     {name : "Abc", marks : 60},
//     {name : "Abc", marks : 30},
//     {name : "Abc", marks : 40},
// ]

// students.sort(function(a,b){
//     return a.marks - b.marks
// })
// console.log(students)




///////////////// task //////////////////////
/*
sort the array in ascending order of no of skills known to a student 
*/
let students = [
  { name: "pranav", marks: 50, skills: { arr: ["js", "html", "python"] } },
  { name: "sourav", marks: 100, skills: { arr: ["js", "python"] } },
  { name: "ansh", marks: 5, skills: { arr: ["js"] } },
  {
    name: "pragya",
    marks: 80,
    skills: { arr: ["js", "html", "python", "c++"] },
  },
  { name: "swathi", marks: 45, skills: { arr: ["js", "html", "python"] } },
];


students.sort(function(a,b){
    return a.skills.arr.length - b.skills.arr.length
})
console.log(students)

