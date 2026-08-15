// console.log("Start")
// console.log(1)
// for(let i = 0; i < 3e9; i++){

// }
// console.log("Heavy operation")
// console.log("end")





// setTimeout
// syntax
// setTimeout(callback,time)



// console.log("Start")
// console.log(1)
// setTimeout(() => {
//     console.log("Heavy Operation")
// }, 2000);
// setTimeout(() => {
//     console.log("Heavy Operation 2")
// }, 1000);
// console.log("end")





// function greet(){
//     console.log("hello")
// }
// setTimeout(greet, 2000)

// for function with arguments
// setTimeout(() => greet("Ghost"), 2000);





// console.log("Start")
// setTimeout(() => {
//     console.log(1)
// }, 2000);
// setTimeout(() => {
//     console.log(2)
// }, 1000);
// setTimeout(() => {
//     console.log(3)
// });
// console.log("End")
// start end 3 2 1



// console.log("Start")
// setTimeout(() => {
//     console.log(1)
// }, 2000);
// setTimeout(() => {
//     console.log(2)
// }, 2000);
// setTimeout(() => {
//     console.log(3)
// });
// setTimeout(() => {
//     console.log(4)
// });
// console.log("End")
// start end 3 4 1 2







// sort of Interval 
// let timerId = setTimeout(function tick(){
//     console.log("tick") 
//     timerId = setTimeout(tick,1000)
// }, 1000);

// let btn = document.querySelector("button")
// btn.addEventListener('click',() => {
//     console.log(timerId)
//     clearTimeout(timerId)
// })







// clearTimeout()
// let timerId = setTimeout(() => {
//     console.log("Hello")
// }, 1000)
// console.log(timerId)
// clearTimeout(timerId)











// setInterval
// setInterval(()=>{
//     console.log("Hello")
// },1000)

// creating an infinite counter
// let count = 0;
// setInterval(() => {
//     count++
//     console.log(count)
// },1000)






// function updateClock(){
//     const now = new Date();
//     document.getElementById("clock").innerText = now.toLocaleTimeString()
// }

// let interId = setInterval(updateClock,1000)
// console.log(interId)
// setTimeout(() => {
//     clearInterval(interId);
//     console.log("Clock is stopped")
// }, 5000);



// let start = document.getElementById("start")
// let stop = document.getElementById("stop")

// let h1 = document.getElementById("timer")

// let count = 0;
// h1.textContent = count

// let timerId = null

// start.addEventListener("click",() => {
//     if(timerId == null){
//         timerId = setInterval(() => {
//             count++
//             h1.innerText = count
//         }, 500);
//     }
//     stop.addEventListener("click", () => {
//         clearInterval(timerId)
//         timerId = null
//     })
// })



// let st = document.getElementById("st")
// let sto = document.getElementById("sto")
// let h11 = document.getElementById("timr")
// let count1 = 0;
// h11.textContent = count1

// let timerId1 = null

// st.addEventListener("click",() => {
//     if(timerId1 == null){
//         timerId1 = setInterval(() => {
//             count1++
//             h11.innerText = count1
//         }, 500);
//     }
// })
// sto.addEventListener("click", () => {
//     clearInterval(timerId1)
//     timerId1 = null
// })

// let toggle = document.getElementById("toggle")
// toggle.addEventListener("click",() => {
//     let div = document.getElementById("timer-container")
        
//     div.classList.toggle('d-none')
//     clearInterval(timerId1)
//     timerId1 = null
// })