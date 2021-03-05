class Shape{
    constructor(color){
        this.color = color;
    }
    move(){
        console.log("move");
    }
}

class Circle extends Shape{
    constructor(color,radius){
        super(color);
        this.radius=radius;
    }
    draw(){
        console.log("draw");
    }
    move(){
        super.move();
        console.log("circle move")
    }
}

const c = new Circle("red", 77);
console.log(c);
c.move();