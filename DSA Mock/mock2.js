// let arr = [8,2,4,5,6]

// for(let i =0; i < arr.length - 1; i++){
//     let min = i
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[j] < arr[min]){
//             min = j
//         }
//     }
//     [arr[min],arr[i]] = [arr[i],arr[min]]
// }
// console.log(arr)





// let greet = function(){
//     console.log("greet")
// }

// function fun(fn){
//     return fn()
// }

// console.log(fun(greet))

const employees = [
  {
    id: 1,
    name: "Rahul",
    age: 24,
    department: "IT",
    salary: 55000,
    experience: 2,
    skills: ["JavaScript", "React", "Node.js"]
  },
  {
    id: 2,
    name: "Priya",
    age: 27,
    department: "HR",
    salary: 45000,
    experience: 4,
    skills: ["Recruitment", "Communication"]
  },
  {
    id: 3,
    name: "Amit",
    age: 23,
    department: "IT",
    salary: 60000,
    experience: 1,
    skills: ["Java", "Spring Boot", "SQL"]
  },
  {
    id: 4,
    name: "Sneha",
    age: 26,
    department: "Finance",
    salary: 50000,
    experience: 3,
    skills: ["Excel", "Accounting"]
  },
  {
    id: 5,
    name: "Vikas",
    age: 29,
    department: "IT",
    salary: 75000,
    experience: 5,
    skills: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 6,
    name: "Neha",
    age: 25,
    department: "Marketing",
    salary: 48000,
    experience: 2,
    skills: ["SEO", "Content", "Social Media"]
  }
];

// Get the names of employees whose salary is greater than ₹50,000.

// let empSal = employees.filter(emp => {
//     if(emp.salary > 50000){
//         return emp
//     }
// }).map(emp => emp.name)
// console.log(empSal)

// Total salary of it employees

let itEmp = employees.filter(emp => {
    if(emp.department == "IT"){
        return emp
    }
}).reduce((acc,emp)=>{
    return acc + emp.salary
},0)
console.log(itEmp)