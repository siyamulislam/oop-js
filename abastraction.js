class Animal {
    constructor() {
    }
    makeSound() {
        // console.log('Lets Makes some noise')
        throw new Error("You must implement")
    }
}
class Cat extends Animal{
    talk(){
        console.log('Meow');
    }
}
class Dog extends Animal{
    talk(){
        console.log('Bhuk Bhuk');
    }
    makeSound() {
       this.talk() 
    }
}

const myCat =new Cat()
const myDog =new Dog()
myCat.talk()
myDog.makeSound()