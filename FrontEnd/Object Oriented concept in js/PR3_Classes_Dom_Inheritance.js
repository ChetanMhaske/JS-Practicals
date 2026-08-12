// Encapsulation: it is hiding internal implementation details and exposing only necessary interfaces.
// Private fields enforce true encapsulation by making fields genuinely inaccessible from outside.

// Public vs Private
class DataComparison{
    publicData = "I am public data"
    #privateData = "I am private data"

    publicMethod(){
        console.log('public method called')
        this.#privateMethod();
    }

    #privateMethod(){
        console.log("Private Method called")
        console.log(this.#privateData)
    }

    testAccess(){
        console.log(this.publicData)
        console.log(this.#privateData)
        this.publicMethod()
        this.#privateMethod()
    }
}

const obj = new DataComparison();
console.log(obj.publicData)
console.log('\n')
// console.log(obj.#privateData) // error
obj.publicMethod()
// obj.#privateMethod() // error
console.log('\n')
obj.testAccess()











// // DOM in Class
// class Card{
//     constructor(title,content){
//         this.title = title
//         this.content = content
//         this.element = null
//     }

//     render(parentId){
//         this.element = document.createElement('div')
//         this.element.className = 'card'
//         this.element.innerHTML = `<h1>${this.title}</h1> <p>${this.content}</p>`
//         const parent = document.getElementById(parentId)
//         parent.append(this.element)
//     }
//     remove(){
//         this.element.remove()
//     }
// }

// const card1 = new Card("Title1","sngbvsfjdn")
// card1.render("container")
// card1.remove()
// const card2 = new Card("Title2","sngbvsfjdn")
// card2.render("container")
// card2.render("container")




// // Class Inheritance
// // super(): the super keyword calls the parent constructor and must be called before accessing this 
// // in child class
// class Animal{
//     constructor(name) {
//         console.log("Animal")
//         this.name = name
//     }
//     speak(){
//         console.log(`${this.name} barks from speak()`)
//     }
// }

// class Dog extends Animal{
//     constructor() {
//         super()
//         console.log("Dog")
//     }
//     barks(){
//         console.log(`${this.name} barks from breaks()`)
//     }
// }

// let obj = new Dog("buddy");
// console.log(obj)
// obj.barks()
// obj.speak()
// console.log('\n')



// class Person{
//     constructor(name,age) {
//         this.name = name
//         this.age = age
//     }
// }

// class Student extends Person{
//     constructor(name,age,gender) {
//         super(name,age)
//         this.gender = gender
//     }
//     study(){
//         console.log(`${this.name} is studying and age is ${this.age}`)
//     }
// }
// const std1 = new Student("Ghost",20,"Male")
// console.log(std1)
// std1.study()
// console.log('\n')






// // Method inheritance
// class Phone{
//     constructor(brand){
//         this.brand = brand
//     }

//     call(){
//         console.log(`${this.brand} is calling`)
//     }
// }


// class SmartPhone extends Phone{
//     constructor(brand){
//         super(brand)
//     }
//     takePhoto(){
//         console.log(`${this.brand} takes photo`)
//     }
// }

// const phone1 = new SmartPhone("Samsung")
// phone1.takePhoto()
// phone1.call()



// how to access the private property in child class but cant modify or change it
class Phone{
    #price
    constructor(brand,price){
        this.brand = brand
        this.#price = price
    }

    call(){
        console.log(`${this.brand} is calling`)
    }
    getPrice(){
        return this.#price
    }
}


class SmartPhone extends Phone{
    constructor(brand,price){
        super(brand,price)
    }
    takePhoto(){
        console.log(`${this.brand} takes photo`)
        console.log(`price of the phone is ${this.price}`)
        // cannot directly access private property

        console.log(`price of the phone is ${this.getPrice()}`)
    }
}

const phone1 = new SmartPhone("Samsung",30000)
phone1.takePhoto()
phone1.call()
console.log('\n')
console.log('\n')










// Abstraction: Abstraction hides complex implementation details and exposes the necessary functionality

class CoffeeMachine{
    #boilWater(){
        console.log("Water is boiling")
    }
    #brew(){
        console.log("Brewing")
    }
    makeCoffee(){
        this.#boilWater()
        this.#brew()
        console.log("Coffee is Ready...")
    }
}
const Machine = new CoffeeMachine()
Machine.makeCoffee()











// Polymorphism - Method Overriding
// Allows Object of  different classes to be treated as objects of a common parent class while 
// maintaining their specific behaviour
class Animal{
    makeSound(){
        console.log("Some Sound")
    }
}

class Dog extends Animal{
    makeSound(){
        console.log("Woof")
    }
}
class Cat extends Animal{
    makeSound(){
        console.log("Meow")
    }
}
const dog = new Dog()
dog.makeSound()





class Vehicle{
    start(){
        console.log("Engine is Startig")
    }
}

class Car extends Vehicle{
    start(){
        super.start()
        console.log("Car is ready to run")
    }
}

const car = new Car()
car.start()