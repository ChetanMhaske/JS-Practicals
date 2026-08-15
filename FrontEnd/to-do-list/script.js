let chk1 = document.querySelector('input[name="radio1"]')
let radio1 = document.querySelector("#rad1")
chk1.addEventListener('change',()=>{
    if(chk1.checked){
        radio1.style.color = "green"
    }
    else{
        radio1.style.color = "black"
    }
})

let chk2 = document.querySelector('input[name="radio2"]')
let radio2 = document.querySelector("#rad2")
chk2.addEventListener('change',()=>{
    if(chk2.checked){
        radio2.style.color = "green"
    }
    else{
        radio2.style.color = "black"
    }
})

let chk3 = document.querySelector('input[name="radio3"]')
let radio3 = document.querySelector("#rad3")
chk3.addEventListener('change',()=>{
    if(chk3.checked){
        radio3.style.color = "green"
    }
    else{
        radio3.style.color = "black"
    }
})


let goals = document.querySelectorAll("#rad1, #rad2, #rad3")
const message = document.querySelector("#selected");

goals.forEach(goal => {
    goal.addEventListener('input', () => {
        if (
            goals[0].value.trim() !== "" &&
            goals[1].value.trim() !== "" &&
            goals[2].value.trim() !== ""
        ) {
            message.textContent = "";
            message.style.color = "green";
        }
        else{
            message.textContent = "Please add new Goal";
            message.style.color = "red";
        }
    })
});

let chk = document.querySelectorAll("#radio1, #radio2, #radio3")
console.log(chk)
let barmsg = document.querySelector("#barmsg")
let bar = document.querySelector("#bar")

chk.forEach(check => {
    check.addEventListener('change', () => {
        let arr = []
        for(let  i = 0; i < chk.length; i++){
            arr.push(chk[i].checked)
        }
        let count = 0
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == false){
                count++
            }
        }
        if(count == 1){
            barmsg.textContent = "Just a Step Away, Keep Working"
            bar.textContent = "2/3 Completed"
            bar.style.color = "white"
        }
        else if(count == 2) {
            barmsg.textContent = "Just 2 Steps Away, Keep Working"
            bar.textContent = "1/3 Completed"
            bar.style.color = "white"
        }
        else if(count == 0){
            barmsg.textContent = "Everything is Done..."
            bar.textContent = "3/3 Completed"
            bar.style.color = "white"
        }
        else{
            barmsg.textContent = "Raise the Bar by Completing your goals!"
            bar.textContent = "0/3 Completed"
            bar.style.color = "white"
        }
    })
})


radio1.value = localStorage.getItem("radio1")
radio1.addEventListener('input', () => {
    localStorage.setItem("radio1",radio1.value.trim())
})


radio2.value = localStorage.getItem("radio2")
radio2.addEventListener('input', () => {
    localStorage.setItem("radio2",radio2.value.trim())
})


radio3.value = localStorage.getItem("radio3")
radio3.addEventListener('input', () => {
    localStorage.setItem("radio3",radio3.value.trim())
})


function checkGoals() {

    if (
        goals[0].value.trim() !== "" &&
        goals[1].value.trim() !== "" &&
        goals[2].value.trim() !== ""
    ) {
        message.textContent = "";
        message.style.color = "green";
    }
    else {
        message.textContent = "Please add new Goal";
        message.style.color = "red";
    }
}

// let body = document.querySelector("body")
// body.addEventListener("change", checkGoals);

checkGoals();