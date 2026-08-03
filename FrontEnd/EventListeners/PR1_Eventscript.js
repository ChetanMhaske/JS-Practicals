/*

click
mouseover/mouseout: cursor enters or leaves an element
mousedown/mouseup: mouse button is pressed and released
keyup/deydown: keyboard key is pressed and released
submit: When user submits form
focus: When user focuses on an element

*/


// let btn = document.querySelector("#click-btn")


// here the function is called before the click is registered
// btn.addEventListener('click',greet())

// so avoid using above and write like below
// btn.addEventListener('click',greet)

// function greet(){
//     alert("Hello world")
// }


// btn.addEventListener('click',(e) => {
//     console.log(e.target)
//     alert("Hello id from callback")
// })


// let btn1 = document.querySelector(".click-btn")
// btn1.addEventListener('click',(e) => {
//     console.log(e.target)
//     alert("Hello class from callback")
// })


// task
// if you click on Btn1 it should alert "btn1 is clicked"
// if you click on Btn2 it should alert "btn2 is clicked"

// let btn1 = document.querySelectorAll(".click-btn")[0]
// let btn2 = document.querySelectorAll(".click-btn")[1]
// btn1.addEventListener('click',(e) => {
//     console.log(e.target)
//     alert("Button 1 is clicked")
// })
// btn2.addEventListener('click',(e) => {
//     console.log(e.target)
//     alert("Button 2 is clicked")
// })


let btn = document.querySelectorAll('.click-btn');
// for(let i = 0; i < btn.length; i++){
//     btn[i].addEventListener('click',(e)=>{
//         alert(`Button ${i+1} is Clicked`)
//         // console.log(`Button ${i+1} is Clicked`)
//         console.log(e.target)
//     })
// }
// or
// btn.forEach(items=>{
//     items.addEventListener('click',(e)=>{
//         let btnName = e.target.textContent;
//         console.log(`${btnName} is Clicked`)
//     })
// })


btn[0].addEventListener('click',fun)

function fun(e){
    console.log(e)
    console.log("Hello 1")
}

// We can remove it only when we have written function outside
btn[0].removeEventListener('click',fun)

// we can assign multiple event listeners to a single element
// we cannot remove when we add event like this
btn[0].addEventListener('click',()=>{
    console.log("Hello 2")
})







// Event Bubbling
// When an event happens on an element, it first runs the handelers 
// on it, then its parents, then all the way up to its ancestors
let form = document.querySelector("form")
let div = document.querySelector("div")
let p = document.querySelector("p")

// function eventBubbling(){
//     form.addEventListener('click',()=> alert("FORM is clicked"))
//     div.addEventListener('click',()=> alert("DIV is clicked"))
//     p.addEventListener('click',()=> alert("P is clicked"))
// }

// event moves from ancestor/parent to child
// function eventCapturing(){
//     form.addEventListener('click',()=> alert("FORM is clicked"),true)
//     div.addEventListener('click',()=> alert("DIV is clicked"),true)
//     p.addEventListener('click',()=> alert("P is clicked"))
// }

eventBubbling()
function eventBubbling(){
    

    form.addEventListener('click',()=> {
        alert("FORM is clicked")
    })

    div.addEventListener('click',(e)=> {

        // this will stop the propogation of event
        // e.stopPropagation()

        alert("DIV is clicked")
    })
    
    p.addEventListener('click',(e)=> {
        // e.stopPropagation()
        alert("P is clicked")
    })

    
}