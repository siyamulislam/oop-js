class Father {
  constructor() {
    this.fatherName = "Eartugrul Gazi";
  }
}
class Child extends Father {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
  getFullName() {
    return this.fatherName + " olu " + this.name;
  }
}

const bim = new Child("Osman Bey", 25);
const bim2 = new Child("Gunduz Alp", 32);
console.log(bim);
console.log(bim2);
console.log(bim.getFullName());
