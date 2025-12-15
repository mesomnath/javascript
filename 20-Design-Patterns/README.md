# Design Patterns in JavaScript

## 📌 Common JavaScript Design Patterns

Design patterns are reusable solutions to common programming problems.

## Module Pattern

Encapsulate private data and expose public API.

```javascript
const Calculator = (function() {
    // Private
    let result = 0;
    
    function log(msg) {
        console.log(`[Calculator] ${msg}`);
    }
    
    // Public API
    return {
        add(x) {
            result += x;
            log(`Added ${x}`);
            return this;
        },
        subtract(x) {
            result -= x;
            log(`Subtracted ${x}`);
            return this;
        },
        getResult() {
            return result;
        }
    };
})();

Calculator.add(5).subtract(2).getResult(); // 3
```

## Singleton Pattern

Ensure only one instance exists.

```javascript
const Singleton = (function() {
    let instance;
    
    function createInstance() {
        return {
            name: "Singleton",
            method() {
                console.log("Singleton method");
            }
        };
    }
    
    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const inst1 = Singleton.getInstance();
const inst2 = Singleton.getInstance();
console.log(inst1 === inst2); // true
```

## Factory Pattern

Create objects without specifying exact class.

```javascript
class Car {
    constructor(options) {
        this.doors = options.doors || 4;
        this.state = options.state || "new";
        this.color = options.color || "silver";
    }
}

class Truck {
    constructor(options) {
        this.doors = options.doors || 2;
        this.state = options.state || "new";
        this.wheelSize = options.wheelSize || "large";
    }
}

class VehicleFactory {
    createVehicle(type, options) {
        switch(type) {
            case "car":
                return new Car(options);
            case "truck":
                return new Truck(options);
            default:
                throw new Error("Unknown vehicle type");
        }
    }
}

const factory = new VehicleFactory();
const car = factory.createVehicle("car", { color: "red" });
const truck = factory.createVehicle("truck", { wheelSize: "huge" });
```

## Observer Pattern (Pub/Sub)

Objects subscribe to and receive notifications.

```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(listener => {
                listener(data);
            });
        }
    }
    
    off(event, listenerToRemove) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(
                listener => listener !== listenerToRemove
            );
        }
    }
}

// Usage
const emitter = new EventEmitter();

function handleLogin(user) {
    console.log(`${user} logged in`);
}

emitter.on('login', handleLogin);
emitter.emit('login', 'John'); // "John logged in"
```

## Strategy Pattern

Define family of algorithms, encapsulate each one.

```javascript
class PaymentStrategy {
    pay(amount) {
        throw new Error("Must implement pay method");
    }
}

class CreditCard extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} with credit card`);
    }
}

class PayPal extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} with PayPal`);
    }
}

class Bitcoin extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} with Bitcoin`);
    }
}

class ShoppingCart {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    
    checkout(amount) {
        this.paymentStrategy.pay(amount);
    }
}

const cart1 = new ShoppingCart(new CreditCard());
cart1.checkout(100);

const cart2 = new ShoppingCart(new PayPal());
cart2.checkout(50);
```

## Decorator Pattern

Add new functionality to objects dynamically.

```javascript
class Coffee {
    cost() {
        return 5;
    }
    
    description() {
        return "Simple coffee";
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    
    cost() {
        return this.coffee.cost() + 2;
    }
    
    description() {
        return this.coffee.description() + ", milk";
    }
}

class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    
    cost() {
        return this.coffee.cost() + 1;
    }
    
    description() {
        return this.coffee.description() + ", sugar";
    }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);

console.log(coffee.description()); // "Simple coffee, milk, sugar"
console.log(coffee.cost()); // 8
```

## MVC Pattern

Model-View-Controller architecture.

```javascript
// Model
class Model {
    constructor() {
        this.data = [];
    }
    
    add(item) {
        this.data.push(item);
    }
    
    remove(index) {
        this.data.splice(index, 1);
    }
    
    getData() {
        return this.data;
    }
}

// View
class View {
    constructor() {
        this.app = document.getElementById('app');
    }
    
    render(data) {
        this.app.innerHTML = `
            <ul>
                ${data.map((item, index) => `
                    <li>
                        ${item}
                        <button data-index="${index}">Delete</button>
                    </li>
                `).join('')}
            </ul>
        `;
    }
}

// Controller
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        this.view.app.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const index = e.target.dataset.index;
                this.removeItem(index);
            }
        });
    }
    
    addItem(item) {
        this.model.add(item);
        this.view.render(this.model.getData());
    }
    
    removeItem(index) {
        this.model.remove(index);
        this.view.render(this.model.getData());
    }
}

// Initialize
const app = new Controller(new Model(), new View());
app.addItem('Task 1');
app.addItem('Task 2');
```

## Interview Questions

**Q: What is a design pattern?**
A: Reusable solution to common programming problems, providing proven approaches to code organization.

**Q: What is the Module Pattern?**
A: Pattern that encapsulates private data and exposes public API using closures.

**Q: What is the Singleton Pattern?**
A: Ensures a class has only one instance and provides global access point.

**Q: What is the Observer Pattern?**
A: Objects (observers) subscribe to another object (subject) to receive notifications about state changes.

**Q: When to use Factory Pattern?**
A: When creating objects without specifying exact class, useful for object creation logic.

[See Performance](../01-Performance/README.md) | [Continue to Best Practices](../03-Best-Practices/README.md)
