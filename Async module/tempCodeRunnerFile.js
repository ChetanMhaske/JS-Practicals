Start")
console.log(1)
setTimeout(() => {
    console.log("Heavy Operation")
}, 2000);
setTimeout(() => {
    console.log("Heavy Operation 2")
}, 1000);
console.log("end")