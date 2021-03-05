'use strict'
// shape
//base class super class parent class 
//circle, square
//drived class sub class child class


// circle IS_A shape
//prototipical inheritence

// object circle link to shape 
//each object in js have a prototype 


// array , function is obj 
//object base => __proto__  parent all objs
// class inheritence throgh of object 
// shape is fother circle

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(){}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
};

function Circle (){}
extend(Circle, Shape)
Circle.prototype.duplicate = function(){
    console.log("duplicate circle");
}
const c = new Circle();
//console.log(c);
function Square(){

}
extend(Square, Shape);

Square.prototype.duplicate = function(){
    console.log(" duplicate square");
}

const shapes = [
    new Circle(),
    new Square(),
]
for (let shape of shapes){
    shape.duplicate();
}

class Circle2{
    constructor(radius){
        this.radius = radius;
        this.move = function(){
            console.log("move")
        }
    }
    draw(){
    }
    static parse(str){
        const radius =  JSON
        return new Circle2 (radius);

    }
}
// no need to create instance for calling static methods
const circl = Circle2.parse('{"radius":7}')
