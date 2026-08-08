// selecting all the radio btns
const radioBtn = document.querySelectorAll('input[name="gender"]')



let btn = document.querySelector('#submit')
btn.addEventListener('click', (e) => {
    e.preventDefault()

    // RadioButton
    // const selectedRadioBtn = document.querySelector('input[name="gender"]:checked')
    // console.log(selectedRadioBtn.value)




    // CheckBox
    // const selectedCheckBox = document.querySelectorAll('input[name = "hobby"]')
    // let arr = []
    // // for(let i = 0; i < selectedCheckBox.length; i++){
    // //     if(selectedCheckBox[i].checked){
    // //         arr.push(selectedCheckBox[i].value)
    // //     }
    // // }

    // or

    // selectedCheckBox.forEach(item => {
    //     if(item.checked){
    //         arr.push(item.value)
    //     }
    // })

    // console.log(arr)




    // DropDown List
    const select = document.querySelector("#fruits")
    // console.log(select.options[select.options.selectedIndex].value)

    // let arr = []
    // let option = Array.from(select.options)
    // for(let i = 0; i < option.length; i++){
    //     if(option[i].selected){
    //         arr.push(option[i].value)
    //     }
    // }
    // console.log(arr)

    // or
    console.log(Array.from(select.options).filter(options => options.selected).map(item => item.value))
    
})


// onfocus and onblur events
// const input = document.querySelector("#input")
// const error = document.querySelector("#error")
// input.onblur = function(){
//     if(!input.value.includes('@')){
//         error.innerHTML = "Please enter valid email"
//     }
// }
// input.onfocus = function(){
//     error.innerHTML = ""
// }


// change event works like onblur event
const input = document.querySelector("#input")
// input.addEventListener('change', () => {
//     if(!input.value.includes('@')){
//         error.innerHTML = "Please enter valid email"
//     }
//     else{
//         error.innerHTML = ""
//     }
// })

const h3 = document.querySelector("h3")
input.addEventListener('input',(e) => {
    console.log(e.target.value)
    h3.textContent = e.target.value
})