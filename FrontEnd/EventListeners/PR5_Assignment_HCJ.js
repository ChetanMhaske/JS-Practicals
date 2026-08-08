let button = document.querySelector("button")
let body = document.querySelector("body")

let container = document.createElement('div')

container.style.display = "flex"
container.style.border = "2px solid black"
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "100vh";
container.style.width = "100%";

button.addEventListener('click',(e) => {
    body.append(container)
    let div = document.createElement('div')
    div.style.height = "200px"
    div.style.width = "200px"
    div.style.backgroundColor = "pink"

    let btn = document.createElement("button")
    btn.textContent = "close"

    btn.addEventListener('click', () => {
        div.remove()
        
    })
    div.append(btn)

    container.append(div)
})

