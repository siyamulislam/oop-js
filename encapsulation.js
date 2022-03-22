class Tiger{
    #speed=100;
    constructor(name ){
        this.name= name
        this.#speed=150
    }
    run(){
        console.log(` I am ${this.name} running at ${this.#speed} mph`);
    }
}
const royal= new Tiger('Royal Bengal Tiger')
royal.run()
royal.name='Cat Bengal Bear'
royal.run()
