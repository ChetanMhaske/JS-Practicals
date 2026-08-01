// console.log(document.URL)
// console.log(document.head)
// console.log(document.body.children)
// console.log(document.body.children[0].textContent)
// console.log(document.body.children[1])



// console.log(document.querySelector("h1"))
// console.log(document.querySelector(".heading"))
// console.log(document.querySelector("#idhead"))



// console.log(document.querySelectorAll("h1"))
// console.log(document.querySelectorAll("h1")[1])
// console.log(document.querySelectorAll("h1")[0])




// document.querySelectorAll("h1").forEach(item => 
//     console.log(item.textContent)
// )



// console.log(document.querySelector("#idhead").textContent)



// let elements = document.querySelectorAll("h1")
// // console.log(elements)
// for(let i = 0; i < elements.length; i++){
//     console.log(elements[i].textContent)
// }


// type is said object(array is an object) we can call it a node list
// let elements1 = document.querySelectorAll("h1")
// console.log(typeof(elements1))



// we only want featured elements from div with class posts
// console.log(document.querySelectorAll(".posts .featured"))






// using textContent you can access and update the text
// inside an component
// console.log(document.querySelector('h1').textContent = "New World")






/*

    <div class="posts">
        <p>Post 1</p>
        <p class="featured">Post 2</p>
        <p class="featured">Post 3</p>
        <p>Post 4</p>
        <p class="featured">Post 5</p>
        <p>Post 6</p>
    </div>

    <p class="featured">sdafjuhkaj</p>S





    task
    change post 2 to new post 0
    change post 3 to new post 1
    change post 5 to new post 2
*/

// document.querySelector(".featured").textContent = " new post 0"

// let posts = document.querySelectorAll('.posts .featured')
// // console.log(posts)
// for(let i = 0; i < posts.length; i++){
//     posts[i].textContent = `new post ${i}`
// }

// posts.forEach((items,idx) => 
//     items.textContent = `new post ${idx}`
// )







// Note this gives all the text inside the element
// console.log(document.querySelector('.posts').textContent)






// innerHTML returns all the html code inside css selector
// gets and sets the HTML content inside the element
// console.log(document.querySelector('.posts').innerHTML)
// document.querySelector('.posts').innerHTML = "<h1>Testing innerHTML</h1>"
// document.querySelector('.posts').innerHTML = ""



// document.querySelector('.list').innerHTML = "<li>items list</li>"


// when you want to update the text use textContent ans  
// when you want to update tht HTML use innerHTML
// textContent is faster than innerHTML -> in innerHTML The html tags are 
// parsed and rendered again to display the updated HTML
for(let i = 1; i <= 5; i++){
    document.querySelector('.list').innerHTML += `<li>item ${i}</li>`
}