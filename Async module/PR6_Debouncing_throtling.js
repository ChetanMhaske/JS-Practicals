
// Debouncing -> It delays the execution until events stop for a period
// only last call runs
const debounce = (fn,delay) => {
    let timerId;

    return function(...args){
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}


const search = function(query){
    document.getElementById("result").textContent = "searching for: "+ query
    console.log("Searching for: "+query)
}

const searchWithDebounce = debounce(search,1000)
const input = document.getElementById("searchInput")
input.addEventListener("input",(e)=>{
    searchWithDebounce(e.target.value)
})



// Throtling

const throttle = (fn,delay)=>{
    let lastCall = 0
    return function(...args){
        const now = Date.now()
        if(now - lastCall < delay){
            return
        }
        lastCall = now
        return fn(...args)
    }
}

const burst = ()=>{
    console.log("Shoot")
}

const shootThrottle = throttle(burst,1000)

const shoot = document.getElementById("shoot")
shoot.addEventListener("click",()=>{
    shootThrottle()
})