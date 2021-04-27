'use strict'
// JavaScript classes

// 1. object declaraion
class Person {
    // constructor
    constructor (name, age){
        // fields
        this.name = name;
        this.age = age;

    }

    // methods
    speak(){
        console.log(`${this.name}: hi!`);
    }
    
}

const jin = new Person('jin', 27)
console.log(jin.name);
console.log(jin.age);
jin.speak();


// 2. Getter and setters
class User {
    constructor (firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value) {
        // if (value < 0){
        //     throw Error ('age can\'t be negative');
        // }
        this._age = value < 0? 0 : value;
    }
}

const user1 = new User('jin', 'kim', -1);
console.log(user1.age);
console.log(user1._age);

// 3. Fields (public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
class Article {
    static publisher = 'Kim\'s Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
Article.printPublisher();

// 5. Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color!`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('▲');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }

}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);
console.log(triangle.toString());
