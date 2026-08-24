// class Book{
//     constructor(){

//     }
// }

// let book1 = new Book()
// let book2 = new Book()
// let book3 = new Book()
// let book4 = new Book()
// let book5 = new Book()



// class makeCoffee{
//     #boilwater(){
//         console.log("Water is getting ready...")
//     }
//     #brew(){
//         console.log(("Brewing Stage..."))
//     }
//     coffee(){
//         this.#boilwater()
//         this.#brew()
//         console.log("Cofee is ready")
//     }
// }

// let coffee1 = new makeCoffee()
// coffee1.coffee()


// You are building an online food delivery app. When a user places an order, the app needs to check whether the restaurant has accepted it.

// Create a function checkOrderStatus(orderId) that returns a Promise.

// After 2 seconds, randomly resolve with "Order Accepted" or reject with "Restaurant rejected the order".
// Handle both cases using .then() and .catch().
// Test it with order ID 501.

// Expected output will be either:

// Order 501: Order Accepted

// or

// Order 501: Restaurant rejected the order

function checkOrderStatus(orderId){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            if(orderId == 501){
                res(`Order ${orderId}: Order Accepted`)
            }
            else{
                rej(`Order ${orderId}: Order Rejected`)
            }
        }, 2000);
    })
}

checkOrderStatus(5010).then(res =>{
    console.log(res)
}).catch(rej =>{
    console.log(rej)
})

async function fetching() {
    try{
        let res = await checkOrderStatus(5010)
        console.log(res)
    }
    catch(err){
        console.log(err)
    }
} 
fetching()