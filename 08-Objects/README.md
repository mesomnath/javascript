# Objects in JavaScript

## 📌 Complete guide to JavaScript Objects

Objects are collections of key-value pairs - the foundation of JavaScript. Everything in JavaScript (except primitives) is an object!

## Creating Objects
- Object literals
- Constructor functions
- Object.create()
- Class syntax (ES6)

## Object Properties
- Accessing properties (dot vs bracket notation)
- Adding and deleting properties
- Property descriptors
- Getters and setters

## Object Methods
- Object.keys(), Object.values(), Object.entries()
- Object.assign()
- Object.freeze(), Object.seal()
- hasOwnProperty()

## this Keyword
- Understanding context
- bind(), call(), apply()
- Arrow functions and this

## Object Destructuring
- Basic destructuring
- Nested destructuring
- Default values
- Rest in objects

## Prototypes
- Prototype chain
- __proto__ vs prototype
- Inheritance basics

## Interview Questions

**Q: What is the difference between dot and bracket notation?**
A: Dot notation requires valid identifiers, bracket notation accepts any string/expression.

**Q: How do you copy an object?**
A: Shallow copy: `{...obj}` or `Object.assign()`. Deep copy: `JSON.parse(JSON.stringify(obj))` or libraries.

**Q: What is the this keyword?**
A: Refers to the object executing the current function. Context depends on how function is called.

[See Arrays](../01-Arrays/README.md) | [Continue to Strings](../03-Strings/README.md)
