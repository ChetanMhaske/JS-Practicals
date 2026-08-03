// let select = document.querySelector("#select")
// select.remove()

let ul = document.querySelector("ul")
let li = document.createElement('li')
let p = document.createElement('p')
p.textContent = "ABC"

li.textContent = 'Orange'

// ul.append(li) // adds element at the end
ul.prepend(li)  // adds element at the start

// ul.before(p) // adds befors sibling element 
ul.after(p) //adds after sibling element

// deletion of element in DOM
ul.remove()