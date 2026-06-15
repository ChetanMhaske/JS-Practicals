// const key = "city";

// const person = {
//     name: "Rahul",
//     [key]: "Pune"
// };

// console.log(person.city); // pune
// console.log(person[key]); // pune
// console.log(person["name"]);// Rahul

let arr = [1,2,3,4,5]
let target = 5
console.log(binarySearch(arr,target))
function binarySearch(arr,target){
    let left = 0
    let right = arr.length - 1

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] == target){
            
            return mid
        }
        else if(arr[mid] < target){
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return false
}

// let n = 4
// for(let i = 0; i < n; i++){
//     let row = ""

//     for(let j = 0; j <= i; j++){
//         row += String.fromCharCode(65+j)
//     }
//     console.log(row)
// }

// function counter() {
//  let count = 0;
//  return function() {
//      return ++count
//  };
// }
// let c1 = counter();
// let c2 = counter();
// console.log(c1());//1
// console.log(c1());//2
// console.log(c2());//1
// console.log(c2());//2


const products = [
 {
 id: 101,
 name: "Laptop",
 price: 65000,
 category: "Electronics",
 brand: "Dell",
 rating: 4.5,
 stock: 12,
 tags: ["computer", "work", "office"]
 },
 {
 id: 102,
 name: "Smartphone",
 price: 35000,
 category: "Electronics",
 brand: "Samsung",
 rating: 4.3,
 stock: 25,
 tags: ["mobile", "android", "5G"]
 },
 {
 id: 103,
 name: "Headphones",
 price: 5000,
 category: "Electronics",
 brand: "Sony",
 rating: 4.7,
 stock: 8,
 tags: ["audio", "wireless", "music"]
 },
 {
 id: 104,
 name: "Running Shoes",
 price: 4500,
 category: "Fashion",
 brand: "Nike",
 rating: 4.4,
 stock: 20,
 tags: ["sports", "running", "fitness"]
 },
  {
 id: 104,
 name: "Running Shoes",
 price: 4500,
 category: "Fashion",
 brand: "Nike",
 rating: 4.4,
 stock: 20,
 tags: ["sports", "running", "fitness"]
 },
 {
 id: 105,
 name: "Backpack",
 price: 2500,
 category: "Fashion",
 brand: "Puma",
 rating: 4.1,
 stock: 15,
 tags: ["bag", "travel", "college"]
 },
 {
 id: 106,
 name: "Coffee Maker",
 price: 8000,
 category: "Home",
 brand: "Philips",
 rating: 4.6,
 stock: 6,
 tags: ["coffee", "kitchen", "appliance"]
 }
]

// for(let i = 0; i < products.length; i++){
//     if(products[i].price >= 30000 && products[i].category == "Electronics"){
//         console.log(products[i].name)
//     }
// }

// let res =products.filter(
//     product => product.category == "Electronics" && product.price >= 30000
// ).map(product => product.name)

// console.log(res)

// Find the total price of Fashion products whose rating is greater than 4.2

let res = products.filter(
    (product) => product.category == "Fashion" && product.rating > 4.2
).reduce((total,prod) => {
    return total + prod.price
},0)
console.log(res)

// let total = 0;
// for(let i = 0; i < products.length;i++){
//     if(products[i].category == "Fashion" && products[i].rating > 4.2){
//         total += products[i].price
//     }
// }
// console.log(total)

// let n = 5
// function recursiveF(n){

//     if(n == 0){
//         return 1
//     }
//     return n * recursiveF(n - 1)
// }
// console.log(recursiveF(n))


// let arr = [[1,2,3],[4,5,6],[7,8,9]]

// for(let i = 0; i < arr.length; i++){

//     let res = []
//     for(let j = 0; j < arr.length; j++){
//         console.log(arr[i][j])
//     }
// }