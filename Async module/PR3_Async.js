// Ways to write async functions using async keyword
// async function func() {};
// const func = async()=>{};



/*
the word async before function means: a function always returns a promise
await works only inside async functions
await makes js wait until the promise is settels and returns its result
i.e it suspends the function execution until the promise settels and resumes it with result
*/




// function getCheese(){
//     return new Promise((res,rej)=>{

//         setTimeout(() => {
//             const cheese = "cheese"
//             console.log("Here is : ",cheese)
//             res(cheese)
//         }, 5000);
//     })
// }


// function makeDough(cheese){
//     return new Promise((res,rej)=>{

//         setTimeout(() => {
//             const dough = cheese + " dough"
//             console.log("Here is : ", dough)
//             res(dough)
//         }, 2000);
//     })
// }

// function bakePizza(dough){
//     let promise1 = new Promise((res,rej)=>{

//         setTimeout(() => {
//             const pizza = dough + " Pizza"
//             console.log("Here is : ",pizza)
//             res(pizza)
//         }, 2000);
//     })
//     return promise1
// }

// let func = async()=>{
//     try{
//         const res1 = await getCheese()
//         // console.log(res1)
//         const res2 = await makeDough(res1)
//         // console.log(res2)
//         const res3 = await bakePizza(res2)
//         console.log(res3)
//     }
//     catch(err){
//         console.log("Error",err)
//     }
//     finally{
//         console.log("Promise Executed Successfully")
//     }
// }
// func()
// console.log("Hello world")






// function fetchData(){
//     let flag = true
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             if(flag){
//                 res({message: "Data fetched successfully",Data: [1,2,3,4,5]})
//             }   
//             else{
//                 rej({message: "Error in Fetching Data"})
//             }
//         },2000);
//     })
// }

// // with then catch  finally chaining
// fetchData().then(data=>{
//     console.log(data.Data)
// }).catch(err =>{
//     console.log(err)
// })


// // with async and await
// async function fetching() {
//     try{
//         const res = await fetchData()
//         console.log(res)
//     }catch(err){
//         console.log(err)
//     }
// }
// fetching()











// // fetch(): used to fetch API's
// async function fetching() {
//     try{
//         let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         let data = await res.json()
//         console.log(data)
//     }catch(err){
//         console.log("Errorrrrrrr: ",err)
//     }
// }
// fetching()

// let res = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((res)=>{
//     let data = res.json()
//     return data
// }).then((data)=>{
//     console.log(data)
// }).catch(err => console.log("Error is:", err))







const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5/'
let div = document.getElementById("posts")

/*
<div>
    <strong>Title</strong>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quas.</p>
</div>
*/

// let fetching = fetch(API_URL)
// fetching.then((res)=>{
//     let data = res.json()
//     return data
// }).then(data=>{
//     data.map(post=>{
//         let subdiv = document.createElement("div") 
//         let title = document.createElement("strong")
//         let p = document.createElement("p")

//         title.textContent = post.title
//         p.textContent = post.body

//         subdiv.appendChild(title)
//         subdiv.appendChild(p)

//         div.appendChild(subdiv)
//     })
// })


// async function fetching() {
//     try{
//         showLoading()
//         let api = await fetch(API_URL)
//         let data = await api.json()
//         render(data)
//     }catch(err){
//         div.innerHTML = "<h1>URL is wrong</h1>"
//     }

// }
// fetching()


// function render(data){
//     div.innerHTML = ""
//     data.map(item => {
//         const subdiv = document.createElement("div")
//         subdiv.innerHTML = `<strong>${item.title}</strong><p>${item.body}</p>`
//         div.append(subdiv)
//     })
// }


// function showLoading(){
//     div.innerHTML = "<h1>Loading....</h1>"
// }