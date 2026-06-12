// let arr = [1,2,3,4,5,6,7];



// let temp = arr[0]
// for(let  i = 1; i < arr.length; i++){
//     arr[i - 1] = arr[i]
// }



// arr[arr.length-1] = temp
// console.log(arr)
// let d = 3
// let temp = arr.slice(0,d)
// console.log(temp)
// for(let i = d; i < arr.length; i++){
//     arr[i-d] = arr[i]
// }
// // arr[arr.length - 1] = temp
// // let j = 0;
// for(let i = arr.length-d; i < arr.length; i++){
//     arr[i] = temp[i - (arr.length-d)]
//     // j++
// }
// console.log(arr)


// let k = 3
// k = k % arr.length;

// let temp = arr.slice(arr.length - k)

// for(let i = arr.length - k - 1; i >= 0; i--){
//     arr[i+k] = arr[i]
// }

// // let j = 0;

// for(let i = 0; i < k; i++){
//     arr[i] = temp[i]
//     i
// }
// console.log(arr)


// let nums = [1,1,2]
// function fun(nums){

//     let j = 1;

//     for(let i = 1; i < nums.length; i++){
//         if(nums[i] !== nums[i - 1]){
//             nums[j] = nums[i];
//             j++;
//         }
//     }
//     return j;
// }
// console.log(fun(nums))

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
// Return an array of just the product names.
// Return an array of {name, price} objects only (drop all other fields).
// Return an array of prices with 18% GST added.
// Return an array of strings like "Laptop - ₹65000" for each product.
// let res1 = products.map(prod => {
//     return prod.name
// })
// console.log(res1)

// let res2 = products.map(({name,price}) => ({name,price}))
// console.log(res2)

// let res3 = products.map(prod => {
//     return prod.name + " " + prod.price * 1.18
// })
// console.log(res3)

// let res4 = products.map(prod => {
//     return prod.name + " - ₹" + prod.price 
// })
// console.log(res4)



// filter()
// 5. Return all products in the "Electronics" category.
// 6. Return all products with rating >= 4.5.
// 7. Return all products that are low in stock (stock < 10).
// 8. Return all products that have "wireless" in their tags.

// let fil1 = products.filter(prod => {
//     return prod.category == "Electronics" 
// })
// console.log(fil1)

// let fil2 = products.filter(prod => {
//     return prod.rating >= 4.2
// })
// console.log(fil2)


// let fil3 = products.filter(prod => {
//     return prod.stock < 10
// })
// console.log(fil3)

// let fil4 = products.filter(prod => {
//     return prod.tags.includes("wireless")
// })
// console.log(fil4)


// reduce()
// 9. Return the total value of all inventory (price * stock summed across all products).
// 10. Return the count of products per category (e.g., {Electronics: 3, Fashion: 2, Home: 1}).
// 11. Return the single highest-rated product (just one object, not an array).
// 12. Return total stock value grouped by category (e.g., {Electronics: ..., Fashion: ..., Home: ...}).

// let red = products.reduce((acc,product) => {
//     return acc + product.price * product.stock
// },0);
// console.log(red)

// let red2 = products.reduce((acc,product) => {
//     let category = product.category
//     if(!acc[category]){
//         acc[category] = 0
//     }
//     acc[category]++;
//     return acc
// },{});
// console.log(red2)

// let rating = 0;
// let red3 = products.reduce((acc,product) => {
//     return product.rating > acc.rating ? product : acc;
// },products[0]);
// console.log(red3)

// let red4 = products.reduce((acc,product) => {
//     let category = product.category
//     let stock = product.stock * product.price
    
//     if(!acc[category]){
//         acc[category] = 0;
//     }
//     acc[category] += stock

//     return acc
// },{});
// console.log(red4)

// Chaining (the ones interviewers actually love)
// 13. Get names of all Electronics products with rating > 4.4, sorted by price descending.
// 14. Get the average price of products in the "Fashion" category.
// 15. Find the brand with the most total stock across all its products.
// 16. Return {category, cheapest} for the cheapest product in each category.
// 17. Get total revenue potential (price * stock) only for products with rating >= 4.3.
// 18. Return an array of unique tags across all products (no duplicates), sorted alphabetically.


let elements1 = products.filter(product => {
    return product.category == "Electronics" && product.rating > 4.4
}).map(product => product.name)
// console.log(elements1)



let elements2 = products.filter(product => {
    return product.category == "Fashion"
})
let average = elements2.reduce((acc,prod) => {
    return (acc + prod.price);
},0) / (elements2.length || 1)
// console.log(average)



let elements3 = products.reduce((acc,prod) => {
    acc[prod.category] = (acc[prod.category] || 0) + prod.stock
    return acc
},{})
let mostStocks = Object.keys(elements3).reduce((acc,prod) => {
    return elements3[prod] > elements3[acc] ? prod : acc;

})
console.log(mostStocks)




let elements4 = products.filter(product => {
    return product.category == "Electronics" && product.rating > 4.4
}).map(product => product.name)
// console.log(elements4)

let elements5 = products.filter(product => {
    return product.category == "Electronics" && product.rating > 4.4
}).map(product => product.name)
// console.log(elements5)

let elements6 = products.filter(product => {
    return product.category == "Electronics" && product.rating > 4.4
}).map(product => product.name)
// console.log(elements6)
