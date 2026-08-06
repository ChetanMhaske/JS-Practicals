let btn = document.querySelector("#btn")
btn.addEventListener('click',(e)=>{
    // e.altKey
    // e.shiftKey
    if(e.altKey && e.shiftKey){
        alert("Hello")
        console.log("Hello world")
    }
})

let box = document.querySelector(".box")
// box.addEventListener('mouseover',()=>{
//     console.log("Hello")
// })
box.addEventListener('mouseover',()=>{
    console.log("Hello")
})
// box.addEventListener('mouseout',()=>{
//     console.log("Hello")
// })

let button = document.querySelector("#theme-toggle")
let body = document.querySelector("body")
button.addEventListener('click', ()=> {
    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = 'black'
        button.textContent = "dark"
    }
    else{
        body.style.backgroundColor = 'white'
        button.textContent = "light"
    }
})