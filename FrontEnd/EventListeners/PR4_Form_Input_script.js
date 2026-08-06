let body = document.querySelector("body");

let div = document.createElement("div");
div.textContent = "Abc";

body.appendChild(div);

// let form  = document.getElementById("my-form")
// console.log(form)

let form1 = document.forms.myForm; //we can access using name attribute of html

// let addressIp = document.getElementById("input")
// console.log(addressIp)

const name = form1.elements.name;
const address = form1.elements.address;
const age = form1.elements.age
const userInfo = form1.elements.userInfo

let submitBtn = document.getElementById("submitBtn");

// submitBtn.addEventListener("click", (e) => {
//     const personObj = {}
//     e.preventDefault();
//     personObj.name = name.value
//     personObj.address = address.value
//     personObj.age = age.value
//     personObj.userInfo = userInfo.value
    
    
//     console.log(persbonObj)
//     form1.reset()
// });


/*
task
every time i enter values in the form and click on submit 
it should enter the details inside my table
*/

let table = document.createElement('table')
let tr = document.createElement('tr')
let th1 = document.createElement('th')
let th2 = document.createElement('th')
let th3 = document.createElement('th')
let th4 = document.createElement('th')

th1.textContent = "name"
tr.appendChild(th1)

th2.textContent = "address"
tr.appendChild(th2)

th3.textContent = "age"
tr.appendChild(th3)

th4.textContent = "user info"
tr.appendChild(th4)

table.append(tr)
body.appendChild(table)




// submitBtn.addEventListener("click", (e) => {
//     const personObj = {}
//     e.preventDefault();
//     personObj.name = name.value
//     personObj.address = address.value
//     personObj.age = age.value
//     personObj.userInfo = userInfo.value
    
//     let tr = document.createElement('tr')

//     let td1 = document.createElement('td')
//     let td2 = document.createElement('td')
//     let td3 = document.createElement('td')
//     let td4 = document.createElement('td')
//     td1.textContent = personObj.name
//     td2.textContent = personObj.address
//     td3.textContent = personObj.age
//     td4.textContent = personObj.userInfo

//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     tr.appendChild(td3)
//     tr.appendChild(td4)
//     table.appendChild(tr)
//     console.log(personObj)
// });


// or

let people = []

submitBtn.addEventListener("click", (e) => {
    const personObj = {}
    e.preventDefault();



    // Validation
    if(!name.value.trim()){
        alert("please enter name")
        return
    }else{
        personObj.name = name.value
    }

    if(!address.value.trim()){
        alert("please enter address")
        return
    }else{
        personObj.address = address.value
    }

    if(!age.value.trim()){
        alert("please enter age")
        return
    }else if(age.value < 18){
        alert("< 18 not allowed")
        return
    }
    else{
        personObj.age = age.value
    }

    if(!userInfo.value.trim()){
        alert("please enter userInfo")
        return
    }else{
        personObj.userInfo = userInfo.value
    }
    

    
    people.push(personObj)

    table.innerHTML=""
    createTable();
});

function createTable(){
    people.map(items => {
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')

        td1.textContent = items.name
        td2.textContent = items.address
        td3.textContent = items.age
        td4.textContent = items.userInfo

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)

        table.appendChild(tr)
    })
}