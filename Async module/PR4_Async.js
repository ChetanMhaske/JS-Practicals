// let API = 'https://dummyjson.com/products'
// let div = document.getElementById("title")
// // task display list the name of all products (title) whose category is groceries

// /*
// ul
//     li item1
//     li item2
//     li item3
// ul
// */

// async function fetching() {
//     try{
//         let res = await fetch(API)
//         let data = await res.json()
//         render(data.products)
//     }catch(err){
//         console.log(err)
//     }
// }
// fetching()



// // render(data.products)
// function render(finaldata){
//     // finaldata.map(item=>{
//     //     if(item.category == "groceries"){
//     //         let ui = document.createElement("ul")
//     //         let li = document.createElement("li")
//     //         li.innerHTML=`<h1>${item.title}</h1>`
//     //         ui.append(li)
//     //         div.append(ui)
//     //     }
//     // })
//     finaldata.filter(item => item.category == "groceries")
//     .map(item => {
//             let ui = document.createElement("ul")
//             let li = document.createElement("li")
//             li.innerHTML=`<h1>${item.title}</h1>`
//             ui.append(li)
//             div.append(ui)
//     })
// }





// // POST -> creating data in DB
// async function createPost(){
//     const newPost = {
//         title:"My first Post",
//         body: "This is body",
//         userId: 1
//     }

//     const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
//         method: "POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(newPost)
//     })

//     const data  = await res.json()
//     console.log("Created:",data)
// }
// createPost()

// // PUT -> Updating a field in DB
// async function updatePost(id) {
//     const updateFields={
//         title:"update title",
//         body:"update body",
//     }
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
//         method: "PUT",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(updateFields)
//     })

//     const data  = await res.json()
//     console.log("Updated:",data)
// }
// updatePost(1)

// // DELETE -> Deletinng data in DB
// async function deletePost(id) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
//         method: "DELETE"
//     })
//     console.log(res)
//     if(res.ok){
//         console.log("Post Deleted")
//     }
//     else{
//         console.log("Post isnt deleted")
//     }
// }
// deletePost(1)