class p{
    constructor(Name,age){
        this.Name =Name;
        this.age =age;
    }
    getD(){
        return ` ${this.Name} is ${this.age} years old.`;
    }
}
const p1= new p("Rishabh",19);
console.log(p1.getD());