// Classes in js are templates for creating objects. they encapsulate data and behaviiour into a 
// single structure
// Note: the methods created inside your class automatically are assigned inside the prototype
class User{
    constructor(uname,email){
        console.log('hi')
        this.uname = uname
        this.email = email
    }

    greet(){
        console.log(`Hello ${this.uname}`)
    }
}

const user1 = new User("Ghost","ghost@gmail.com")
console.log(user1)
console.log(user1.uname)
console.log(user1.email)
user1.greet()

console.log('\n')





class Student{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    grade = "A"
    section = "C"

    display(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`)
    }
}

let std1 = new Student("Ghost",22)
console.log(std1)
std1.display()
console.log('\n')




// if marks is above 90 -> Grade is A
// if marks is above 80 -> Grade is B
// if marks is above 70 -> Grade is C
// if marks is above 60 -> Grade is D
// if marks is below 60 -> Grade is F


class Marks{
    constructor(name,marks){
        this.name = name
        this.marks = marks
    }
    display(){
        if(this.marks >= 90){
            return `${this.name}'s Grade is A`
        }
        else if(this.marks >= 80){
            return `${this.name}'s Grade is B`
        }
        else if(this.marks >= 70){
            return `${this.name}'s Grade us C`
        }
        else if(this.marks >= 60){
            return `${this.name}'s Grade is D`
        }
        else{
            return `${this.name}'s Grade is F`
        }
    }
}

let std = new Marks("Ghost",82)
console.log(std.display())
console.log('\n')







// getter and setter
// getters and setters are special methods that allow controlled access to properties
// getter retrives values and setters modify them
// they are accessed like properties and not methods
class User1{
    constructor(name,age){
        console.log("constructor")
        this._name = name
        this._age = age
    }

    get age(){
        console.log("get function")
        return this._age
    }

    set age(val){
        console.log("set function")
        if(val < 0 || val > 120){
            console.log("Invalid age")
        }
        else{
            this._age = val
        }
    }
}

const user = new User1("Ghost",20)
console.log(user._age) // 20 -> constructor is working here
console.log(user.age) // 20 -> get age() is working here

user.age = 121 // invalid age -> here set age() function is working
console.log(user)

console.log(user.age)
console.log('\n')






// static methods
// static methods belongs to the class itself, not to the instance they are called on the class 
// not on objects
class Users{
    constructor(name,role){
        this.name = name
        this.role = role
    }

    static createAdmin(name){
        return new Users(name,'Admin')
    }

    static createGuest(name){
        return new Users(name,'Guest')
    }
}

const users =  Users.createAdmin("Ghost") 
console.log(users)






// private fields are written with # prefix and can only be accessed inside the class
// they provide true encapsulation
class BankAccount{
    #balance;
    constructor(name,initialBalance){
        this.name = name
        this.#balance = initialBalance
    }
    deposite(amt){
        this.#balance += amt
    }
}

const us1 = new BankAccount("Ghost",10000)
// us1.#balance = 0 //this shouldnt be happening if we write #balance we cant access it outside class
console.log(us1)
us1.deposite(1000)
console.log(us1)
console.log('\n')
