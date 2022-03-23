function Cat(name){
    this.name=name;
}
Cat.prototype.talk=function(){
    console.log(' Billi Dake Mew Mew');
}
const myCat= new Cat('Billi');
myCat.talk()