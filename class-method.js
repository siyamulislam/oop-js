class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.school = "IDT High School"
    }
    GetAge() {
        if (this.age) {
            console.log(this.age);
        }
        else
            return "no age"
    }

}

const st2 = new Student('karim')
console.log(st2.GetAge());
const student1 = new Student("Rahim", 42)
console.log(student1)

