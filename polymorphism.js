class Circle{
    constructor(radius){
        this.radius=radius
    }
    area(){
        // return Math.PI* this.radius*this.radius;
        return Math.PI* Math.pow(this.radius,2);
    }
}
class Rectangle {
    constructor(width,height){
        this.width=width
        this.height=height
    }
    area(){ 
        return this.width*this.height
    }
} 
class Triangle {
    constructor(ground,height){
        this.ground=ground
        this.height=height
    }
    area(){ 
        return 0.5*(this.ground*this.height)
    }
} 

const wheel= new Circle(100)
console.log(wheel.area())
const land= new Rectangle(100,20)
console.log(land.area())
const piramid= new Triangle(300,200)
console.log(piramid.area())
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
const shape= [new Circle(5),new Rectangle(10,15),new Triangle(15,4)]
for (let i = 0; i < shape.length; i++) {
    const element = shape[i];
    console.log(element.area());
}