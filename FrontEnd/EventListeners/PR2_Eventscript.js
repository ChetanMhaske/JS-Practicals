/*
Task
when i click on add new item a new li element should be added
in the list for e.g.
New item 1
New item 2
New item 3
New item 4
New item 5
*/

let btn = document.getElementById("add")
let count = 0;
let ul = document.querySelector('ul')
btn.addEventListener('click',() => {
    let li = document.createElement('li')
    count++
    li.textContent = `New Item ${count}`
    ul.append(li)
})


// Event Delegation: When we attach a single event listener to 
// the parent element and then target its children. 
// instead of assigning multiple listeners to its children
ul.addEventListener('click',(e)=>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('done')
    }
    console.log(e.target)
})