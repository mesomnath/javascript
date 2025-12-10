# Objects in JavaScript

## Overview

Objects are fundamental data structures in JavaScript used to store collections of key-value pairs. They are versatile and can represent complex entities, making them one of the most important concepts in the language.

## 1. Creating Objects

### Object Literal (Most Common)

```javascript
// Empty object
let emptyObject = {};

// Object with properties
let person = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    "home address": "123 Main St", // Keys with spaces need quotes
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); // "John Doe"
person.greet(); // "Hello, my name is John Doe"
```

### Object Constructor

```javascript
// Using new Object()
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2021;

console.log(car.make); // "Toyota"
```

### Constructor Functions

```javascript
// Create objects with a blueprint
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    
    this.sayHello = function() {
        return `Hello from ${this.name} in ${this.city}`;
    };
}

let person1 = new Person("Alice", 25, "New York");
let person2 = new Person("Bob", 32, "London");

console.log(person1.sayHello()); // "Hello from Alice in New York"
console.log(person2.name); // "Bob"
```

### Object.create()

```javascript
// Create object with a specified prototype
let animal = {
    isAlive: true,
    breathe: function() {
        console.log("Breathing...");
    }
};

let dog = Object.create(animal);
dog.breed = "Golden Retriever";

console.log(dog.isAlive); // true (from prototype)
dog.breathe(); // "Breathing..."
```

## 2. Accessing Properties

### Dot Notation

```javascript
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

console.log(book.title); // "The Great Gatsby"
```

### Bracket Notation

```javascript
// Useful for dynamic keys or keys with special characters
let propertyName = "author";
console.log(book[propertyName]); // "F. Scott Fitzgerald"

let user = {
    "first-name": "Jane",
    "last-name": "Doe"
};

console.log(user["first-name"]); // "Jane"
```

### Optional Chaining (?.) - ES2020

```javascript
// Safely access nested properties
let userProfile = {
    id: 1,
    info: {
        name: "Alice",
        // address property is missing
    }
};

// Without optional chaining (throws error)
// console.log(userProfile.info.address.city); // TypeError

// With optional chaining
console.log(userProfile.info.address?.city); // undefined (no error)
console.log(userProfile.contact?.phone); // undefined
```

## 3. Modifying Objects

### Adding and Updating Properties

```javascript
let student = {
    id: 101,
    name: "Charlie"
};

// Add new property
student.major = "Computer Science";
student["gpa"] = 3.8;

// Update existing property
student.name = "Charles";

console.log(student);
// { id: 101, name: "Charles", major: "Computer Science", gpa: 3.8 }
```

### Deleting Properties

```javascript
delete student.gpa;
console.log(student); // { id: 101, name: "Charles", major: "Computer Science" }
```

### Computed Property Names

```javascript
let propPrefix = "user";
let dynamicUser = {
    [propPrefix + "Id"]: 123,
    [propPrefix + "Name"]: "Dynamic User"
};

console.log(dynamicUser.userId); // 123
```

## 4. Object Methods

### Defining Methods

```javascript
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) { // Shorthand syntax (ES6)
        return a - b;
    },
    multiply: (a, b) => a * b // Arrow function (careful with 'this')
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6
```

### The `this` Keyword

```javascript
let user = {
    name: "Alice",
    balance: 100,
    
    // Regular function: 'this' refers to the user object
    displayBalance: function() {
        console.log(`${this.name}'s balance: $${this.balance}`);
    },
    
    // Arrow function: 'this' is inherited from the outer scope
    withdraw: (amount) => {
        // 'this' here is not the user object
        // this.balance -= amount; // This will not work as expected
        console.log(`Cannot withdraw using arrow function 'this'`);
    },
    
    // Correct way to handle 'this' in methods
    deposit: function(amount) {
        this.balance += amount;
        this.displayBalance();
    }
};

user.displayBalance(); // "Alice's balance: $100"
user.deposit(50); // "Alice's balance: $150"
```

## 5. Iterating Over Objects

### for...in Loop

```javascript
let car = {
    make: "Honda",
    model: "Civic",
    year: 2020
};

for (let key in car) {
    // It's good practice to check for own properties
    if (car.hasOwnProperty(key)) {
        console.log(`${key}: ${car[key]}`);
    }
}
```

### Object Keys, Values, and Entries

```javascript
// Object.keys() - returns array of keys
let keys = Object.keys(car);
console.log(keys); // ["make", "model", "year"]

keys.forEach(key => {
    console.log(`${key}: ${car[key]}`);
});

// Object.values() - returns array of values
let values = Object.values(car);
console.log(values); // ["Honda", "Civic", 2020]

// Object.entries() - returns array of [key, value] pairs
let entries = Object.entries(car);
console.log(entries); // [["make", "Honda"], ["model", "Civic"], ["year", 2020]]

// Using for...of with Object.entries()
for (let [key, value] of Object.entries(car)) {
    console.log(`${key} -> ${value}`);
}
```

## 6. Object Manipulation

### Copying Objects

```javascript
let original = { a: 1, b: { c: 2 } };

// Shallow copy (nested objects are still referenced)
let shallowCopy = { ...original }; // Spread syntax
let shallowCopy2 = Object.assign({}, original);

shallowCopy.a = 99;
console.log(original.a); // 1 (primitive value is copied)

shallowCopy.b.c = 99;
console.log(original.b.c); // 99 (nested object is referenced)

// Deep copy (nested objects are also copied)
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 50;
console.log(original.b.c); // 99 (original is unaffected)
```

### Merging Objects

```javascript
let defaults = { theme: "light", notifications: true };
let userSettings = { notifications: false, timezone: "GMT" };

// Merge using spread syntax (properties in later objects overwrite earlier ones)
let finalSettings = { ...defaults, ...userSettings };
console.log(finalSettings);
// { theme: "light", notifications: false, timezone: "GMT" }

// Merge using Object.assign()
let merged = Object.assign({}, defaults, userSettings);
console.log(merged);
```

## 7. Object Destructuring (ES6+)

```javascript
let user = {
    id: 123,
    name: "Alice",
    email: "alice@example.com",
    settings: {
        theme: "dark",
        language: "en"
    }
};

// Basic destructuring
let { name, email } = user;
console.log(name); // "Alice"

// Renaming variables
let { name: userName, email: userEmail } = user;
console.log(userName); // "Alice"

// Default values
let { role = "guest" } = user;
console.log(role); // "guest"

// Nested destructuring
let { settings: { theme, language } } = user;
console.log(theme); // "dark"

// Rest operator
let { id, ...rest } = user;
console.log(id); // 123
console.log(rest); // { name: "Alice", email: "alice@...", settings: {...} }

// In function parameters
function displayUser({ name, email, role = "user" }) {
    console.log(`Name: ${name}, Email: ${email}, Role: ${role}`);
}

displayUser(user);
```

## 8. Getters and Setters

```javascript
let userProfile = {
    firstName: "John",
    lastName: "Doe",
    
    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    // Setter
    set fullName(value) {
        if (typeof value !== 'string' || !value.includes(' ')) {
            console.error("Invalid full name format");
            return;
        }
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(userProfile.fullName); // "John Doe" (using getter)

userProfile.fullName = "Jane Smith"; // Using setter
console.log(userProfile.firstName); // "Jane"
console.log(userProfile.fullName); // "Jane Smith"
```

## 9. Practical Examples

### Configuration Management

```javascript
const defaultConfig = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
    cache: true
};

function createApiRequest(userConfig) {
    const config = { ...defaultConfig, ...userConfig };
    
    console.log("Sending request with config:", config);
    // fetch(config.apiUrl, { ... });
}

createApiRequest({ timeout: 10000, cache: false });
```

### Data Modeling

```javascript
function createProduct(id, name, price, category, inStock = true) {
    return {
        id,
        name,
        price,
        category,
        inStock,
        
        display() {
            console.log(`${this.name} ($${this.price}) - ${this.inStock ? "In Stock" : "Out of Stock"}`);
        },
        
        updatePrice(newPrice) {
            if (newPrice > 0) {
                this.price = newPrice;
            }
        }
    };
}

let laptop = createProduct(101, "Laptop", 999, "Electronics");
laptop.display();
laptop.updatePrice(949);
laptop.display();
```

### State Management (Simple Example)

```javascript
function createStore(initialState) {
    let state = { ...initialState };
    
    return {
        getState() {
            return { ...state }; // Return a copy
        },
        
        updateState(newState) {
            state = { ...state, ...newState };
            console.log("State updated:", state);
        },
        
        resetState() {
            state = { ...initialState };
        }
    };
}

let appStore = createStore({ user: null, theme: "light" });
console.log(appStore.getState());

appStore.updateState({ user: { name: "Alice" } });
appStore.updateState({ theme: "dark" });
```

## Common Mistakes to Avoid

1. **Shallow vs Deep Copy**: Confusing how nested objects are copied.
2. **`this` in Arrow Functions**: Using arrow functions for methods when you need `this` to refer to the object itself.
3. **Bracket vs Dot Notation**: Forgetting to use bracket notation for dynamic or invalid identifier keys.
4. **Modifying Objects Directly**: Modifying objects passed as arguments can lead to side effects. Create copies when necessary.
5. **`for...in` without `hasOwnProperty`**: Can lead to iterating over inherited properties.

## Summary

| Feature | Description | Example |
|---------|-------------|---------|
| Literals | Easiest way to create objects | `let obj = { a: 1 };` |
| Properties | Key-value pairs storing data | `obj.a` or `obj['a']` |
| Methods | Functions stored as properties | `obj.myMethod = () => {};` |
| `this` | Refers to the object a method is called on | `this.name` |
| Iteration | `for...in`, `Object.keys/values/entries` | `for (let key in obj)` |
| Destructuring | Extract properties into variables | `let { a, b } = obj;` |
| Spread `...` | Copying or merging objects | `let copy = { ...obj };` |
| Getters/Setters | Computed properties | `get fullName() {}` |

Objects are the backbone of JavaScript. Mastering them is crucial for building any non-trivial application.