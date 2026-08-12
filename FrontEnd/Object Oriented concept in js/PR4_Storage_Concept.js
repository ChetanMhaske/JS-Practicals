// Local Storage

// Local Storage -> Its a browser storage given to a website that allows persistant key value pairs with no expiration time data survives when browser restarts 
// and is accessible across all tabs/windows of the same origin

// localStorage.setItem(<key>,<value>)
// localStorage.setItem('Name','Ghost')

// // fetching values from local storage
// let val = localStorage.getItem('Name')
// console.log(val) // Ghost

// localStorage.setItem('Name2','abc');
// localStorage.setItem("Name2","xyz")

// let val2 = localStorage.getItem("Name2")
// console.log(val2)



// reset values like this in local storage
// localStorage.setItem("Name2","")

// // removing a specic key value pair from localstorage
// localStorage.removeItem("Name2")

// localStorage.setItem("Name2","avndsa")
// localStorage.setItem("Name3","nkdfvn")

// // no of key value pairs in local storage:
// console.log(localStorage.length)


// we can clear complete local storage using this:
// localStorage.clear()



// localStorage.setItem("number",5)
// localStorage.setItem("array",[1,2,3,4,5])
// localStorage.setItem("object",{name:"Ghost"})

// console.log(typeof localStorage.number, "Before JSON.stringify()")
// console.log(parseInt(localStorage.number)) // but this dosent changes datatype of value in local storage






// solution for that is
// localStorage.setItem("number",JSON.stringify(5))

// localStorage.setItem("array",JSON.stringify([1,2,3,4,5]))

// localStorage.setItem("object",JSON.stringify({name:"Ghost"}))

// // the below script only run when the document has been loaded
// document.addEventListener("DOMContentLoaded",() => {
//     console.log(JSON.parse(localStorage.getItem("number")))
//     console.log(JSON.parse(localStorage.getItem("array")))
//     console.log(JSON.parse(localStorage.getItem("object")))
// })







// // to check how much storage is remaining out of quota in bytes
// if(navigator.storage && navigator.storage.estimate){
//     navigator.storage.estimate().then(est => {
//         console.log(`Used: ${est.usage} of ${est.quota} bytes`)
//     })
// }





// let count = JSON.parse(localStorage.getItem("count")) || 0

// let counter = document.querySelector("#count")
// counter.textContent = count

// let btn = document.querySelector("#btn")
// btn.addEventListener('click',(e) => {
//     count++
//     counter.textContent = count

//     localStorage.setItem("count",JSON.stringify(count))
// })

// let btn1 = document.querySelector("#btn1")
// btn1.addEventListener('click',(e) => {
//     count--
//     counter.textContent = count

//     localStorage.setItem("count",JSON.stringify(count))
// })









// Session Storage
// persists -> intil tab/window is closed
// scope -> single tab
// storage limit -> 5-10MB
// use case -> temporary session data

// Note -> both local and session storage can survive on reload

sessionStorage.setItem("name","Ghost")
console.log(sessionStorage.getItem("name"))