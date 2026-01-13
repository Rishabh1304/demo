class shape{
    constructor(name){
        this.name = name;
    }
    draw(){
        console.log(`Drawing a ${this.name}`)
    }
}
class Circle extends shape{
    draw(){
        console.log(`Drawing a circle`)
    }
}
class Square extends shape{
    draw(){
        console.log(`Drawing a square`)
    }
}

let Shape = new shape("shape");
let circle = new Circle;
let square = new Square;

Shape.draw();
circle.draw();
square.draw();