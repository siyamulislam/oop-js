class Animal{
    static category =`Horse`
    location ='Dhaka'
    constructor(name ,speed){
        this.name=name
        this.speed=speed
    }
    static compare(animal1,animal2){
        if(animal1.speed>animal2.speed){
            return `${animal1.name} is Faster`
        }
        else {
            return `${animal2.name} is Faster`
        }

    }
}
//static will be undefined if create new Object ~~ need to call main class to access

// console.log(myRat.category);
// console.log(Animal.category);
// console.log(myRat.location);
// console.log(Animal.location);

const myCat= new Animal('Billi',20)
const myDog= new Animal('Kutta',15)
const result =Animal.compare(myCat,myDog)
console.log(result);