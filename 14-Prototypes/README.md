# Prototypes and Inheritance

## 📌 JavaScript Prototypes

Every JavaScript object has a prototype - another object from which it inherits properties and methods.

## Prototype Chain

```javascript
let animal = {
    eats: true,
    walk() {
        console.log("Walking");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

console.log(rabbit.eats);  // true (inherited)
rabbit.walk();             // "Walking" (inherited)
```

## Constructor Functions

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name}`);
};

let john = new Person("John", 30);
john.greet(); // "Hi, I'm John"
```

## ES6 Classes (Syntactic Sugar)

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    
    study() {
        console.log(`${this.name} is studying`);
    }
}

let student = new Student("Alice", 20, "A");
student.greet();  // Inherited
student.study();  // Own method
```

## Prototypal Inheritance

```javascript
// Parent
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(`${this.name} is eating`);
};

// Child
function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log("Woof!");
};

let dog = new Dog("Buddy", "Golden Retriever");
dog.eat();  // Inherited
dog.bark(); // Own method
```

## Object.create()

```javascript
let personProto = {
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

let john = Object.create(personProto);
john.name = "John";
john.greet(); // "Hello, I'm John"
```

## Interview Questions

**Q: What is prototype?**
A: An object from which other objects inherit properties and methods.

**Q: Difference between __proto__ and prototype?**
A: `__proto__` is the actual object used in lookup chain. `prototype` is property on constructor functions.

**Q: What is prototypal inheritance?**
A: Objects inherit directly from other objects, not from classes.

**Q: Difference between class and constructor function?**
A: Classes are syntactic sugar over constructor functions, providing cleaner syntax.

[See Closures](../01-Closures/README.md) | [Continue to Async JS](../03-Async-JS/README.md)
