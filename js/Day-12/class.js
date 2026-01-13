class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person("Rahul",20)
const person2 = new Person("Ragav",21)
console.log(person2)
console.log(person2.name)
console.log(person2.age)
console.log(`My name is ${person2.name} and my age is ${person2.age}`)
console.log("My name is "+person1.name+" and my age is "+person2.age)