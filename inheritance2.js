class Gadget {
    constructor(price, model) {
        this.price = price;
        this.model = model;
    }
    
    charging(){
        console.log(this.model+' is charging started 90%');
    }
}
class Phone extends Gadget {
    constructor(price, model, camera) {
        super(price,model)
        this.camera = camera;
    }
     call(){
       return console.log(this.model+' is calling my ..*..');
    }
}
class Laptop {
    constructor(price, model, core) {
        this.price = price;
        this.model = model;
        this.core = core;
    }
}
class Ram {
    constructor(price, model, Type) {
        this.price = price;
        this.model = model;
        this.Type = Type;
    }
}
const k20= new Phone('50k', 'k20 pro','48mp')
k20.call()
k20.charging()