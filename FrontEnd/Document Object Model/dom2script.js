console.log(document.getElementById("elem"))

console.log(document.getElementsByClassName("classElement"))
console.log(document.getElementsByClassName("classElement")[2])


let element = document.getElementById("element")
element.style.color = 'red'
element.style.fontSize = '24px'
element.style.backgroundColor = 'aqua'
element.style.width = 'fit-content'



// closest searches for an ansestor of the element like parent grandparent...
let chapter = document.querySelector('.chapter')
// console.log(chapter.closest('.book'))
// console.log(chapter.closest('div'))
// console.log(chapter.closest('.contents'))
console.log(chapter.closest('h1')) //because h1 is no parent to chapter




console.log(document.querySelector('.contents').id)
console.log(document.querySelector('.contents').className)


let contents = document.querySelector('.contents');
contents.id = 'newID'
console.log(document.querySelector(".contents").id)



// let img = document.querySelector("img")
// img.src = "https://images.unsplash.com/photo-1671163096145-0e606e1cc6f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// img.alt = "Tiranga"

let img = document.querySelector('img')
console.log(img.getAttribute('src'))
console.log(img.getAttribute('alt'))
img.setAttribute("src","https://images.unsplash.com/photo-1671163096145-0e606e1cc6f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
img.setAttribute("alt","Tiranga")


// let contents = document.querySelector('.contents');
// contents.id = 'newID'
// console.log(document.querySelector(".contents").id)

// contents.className = "Wrapper newClass"
// console.log(document.querySelector(".Wrapper").className)


// classList: gives a list of class and multiple methods that 
// can be attatched to this list
console.log(document.querySelector(".contents").classList)
let contents = document.querySelector(".contents").classList
contents.add("newClass")
contents.remove("newClass")
contents.toggle("newClass")

// it checks if the class name exists
console.log(contents.contains("container"))






let boxContainer = document.querySelector('.box-container')

let div = document.createElement("div")
div.style.height = "200px"
div.style.width = "200px"
div.style.background = "red"
div.className = "box"

boxContainer.append(div)

let p = document.createElement("p")
p.textContent = "asdasdasd"

boxContainer.appendChild(p)






let fruits = ['apple','banana','kiwi','orange']


let list = document.querySelector("ul")
// for(let i = 0; i < fruits.length; i++){
//     let li = document.createElement("li")
//     li.textContent = fruits[i]
//     list.appendChild(li)
// }

fruits.map((item) => {
    let li = document.createElement("li")
    li.textContent = item;
    list.appendChild(li)
})









// id	name
// 1	abc
// 2	abc
// 3	abc
// 4	abc
// 5	abc

let users = [
    {id:1,name:"abc"},
    {id:2,name:"abc"},
    {id:3,name:"abc"},
    {id:4,name:"abc"},
    {id:5,name:"abc"},
]


let table = document.createElement('table')
table.style.border = "2px solid black";

let keys = Object.keys(users[0])

let row = document.createElement('tr')

for(let i = 0; i < keys.length; i++){
    let th1 = document.createElement('th')
    th1.textContent = keys[i];
    row.appendChild(th1)
} 
table.appendChild(row)

// users.map(item => {
//     tr = document.createElement('tr')
//     let td1 = document.createElement("td")
//     td1.textContent = item.id
//     let td2 = document.createElement("td")
//     td2.textContent = item.name 

//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     table.appendChild(tr)
// })


for(let i = 0; i < users.length; i++){
    tr = document.createElement('tr')
    let td1 = document.createElement("td")
    td1.textContent = users[i].id;
    let td2 = document.createElement("td")
    td2.textContent = users[i].name;

    tr.appendChild(td1)
    tr.appendChild(td2)
    table.appendChild(tr)
}

document.body.appendChild(table)