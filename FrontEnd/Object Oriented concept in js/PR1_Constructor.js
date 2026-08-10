// Constructor function
// A constructor function is a special function that serves as a blueprint 
// for creating multiple objects
// wit similar properties and behaviours.
function Person(name,age,city){
    this.name = name,
    this.age = age,
    this.city = city
}

const person1 = new Person("Xyz",22,"Pune")
const person2 = new Person("Abc",32,"Delhi")
console.log(person1, person2)

// new keyword helps in creating a new instance for the constructor function


function User(username,email,role = "user"){
    this.username = username || "Guest"
    this.email = email
    this.role = role 
    this.isActive = true,
    this.accountCreated = Date.now()
}

let user1 = new User('nova','nova@gmail.com','admin')
let user2 = new User('','guest@gmail.com','admin')
console.log(user1)
console.log(user2)




// let d = new Date()
// console.log(d.getMonth())








function Calculator(brand){
    this.brand = brand;
    this.currentValue = 0;

    // instance methods
    this.add = function(num){
        this.currentValue += num
        return this.currentValue
    }

    this.reset = function(){
        this.currentValue = 0
    }
}

let calc1 = new Calculator("Casio")
console.log(calc1.add(5))
console.log(calc1.add(5))
calc1.reset()
console.log(calc1.add(8))

console.log("\n")






/*
task
create a constructor function rectangle which takes length and width as input it has
3 methods

1 getArea() -> returns area of rectangle
2 getPerimeter() -> returns perimeter of rectangle
3 isSquare() -> returns true if its a square and false if its not
*/

function Rectangle(l,w){
    this.l = l
    this.w = w

    this.getArea = function(){
        return this.l * this.w
    }

    this.getPerimeter = function(){
        return 2 * (this.l + this.w)
    }
    this.isSquare = function(){
        return this.l == this.w
    }
}

let rect1 = new Rectangle(2,2)
console.log(rect1.getArea())
console.log(rect1.getPerimeter())
console.log(rect1.isSquare())


console.log('\n')




function BankAccount(owner,balance){
    this.owner = owner
    this.balance = balance

    this.checkBalance = function(){
        return this.owner + " Balance is: " + this.balance
    }

    this.deposite = function(amount){
        this.balance += amount
    }

    this.withdraw = function(amount){
        if(amount < this.balance){
            this.balance -= amount
        }
        else{
            return "Insufficient Balance"
        }
    }
}


let bank = new BankAccount("Abc",10000)
// console.log(bank.checkBalance())
// console.log(bank.deposite(10000))
// console.log(bank.checkBalance())
// console.log(bank.withdraw(50000))
// console.log(bank.checkBalance())
// console.log(bank.withdraw(10000))
// console.log(bank.checkBalance())

// through this we can easily change balance also like follows
// bank.balance = 20000
// console.log(bank.checkBalance())

// to avoid this we can use bind function

let deposite1 = bank.deposite.bind(bank)
deposite1(1000)
bank.balance = 20000
console.log(bank.checkBalance())



// Prototype function
// each object instance created using constructor func gets its own instance copy of every method
// this can be memory-insufficient if you create 100's of objects
// the prototype allows us to share methods across all instances without duplicitaing them
function Car(brand,model){
    this.brand = brand
    this.model = model
}

Car.prototype.displayInfo = function(){
    return this.brand + " " + this.model
}

let car1 = new Car("Maruti", "Swift")
let car2 = new Car("Maruti", "Dezire")
let car3 = new Car("Maruti", "800")
let car4 = new Car("Maruti", "Alto")

console.log(car1.displayInfo())
console.log(car2.displayInfo())
console.log(car3.displayInfo())
console.log(car4.displayInfo())
console.log('\n')






function Animal(name){
    this.name = name
    this.species = 'Generic Animal'
}

Animal.prototype.makeSound = function(){
    return this.name + " Makes a sound"
}

Animal.prototype.setAge = function(val){
    this.age = val
}

const dog = new Animal("Buddy")

console.log(dog.makeSound())
dog.setAge(5)
console.log(dog.age)
console.log(dog)