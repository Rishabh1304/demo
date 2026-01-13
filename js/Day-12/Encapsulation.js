class Person{
    constructor(name,age){
        this.name=name;
        let pvtage=age;
        this.age= function(){
            return pvtage;
        }
    }
}
let person1= new Person("Ram",12);
console.log(person1.name)