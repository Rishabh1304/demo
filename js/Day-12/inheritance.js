class car{
    constructor(brand){
        this.brand = brand;
    }
}
class brand extends car{
    constructor(brand,mode1){
        super(brand);// kon feature parent se ana chaiya
        this.mode1 = mode1
    }
}
let car1 = new car("suzuki")
console.log(car1.brand)
let car2 = new brand("Ford","Mustang")
console.log(car2.brand)
console.log(car2.mode1)