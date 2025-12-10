# Conditionals in JavaScript

## Overview

Conditionals allow you to execute different code blocks based on certain conditions. They are fundamental for creating dynamic and responsive programs.

## 1. if Statement

The basic conditional statement that executes code if a condition is true.

### Basic Syntax

```javascript
if (condition) {
    // Code to execute if condition is true
}

// Example
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
}
```

### Best Practices for Conditions

```javascript
// Good: Clear boolean expression
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Welcome back!");
}

// Avoid: Using assignment instead of comparison
let score = 85;
// if (score = 90) { // Wrong! This assigns 90 to score
if (score === 90) {   // Correct: comparison
    console.log("Perfect score!");
}

// Good: Explicit comparison for clarity
let items = [];
if (items.length === 0) {  // Clear intent
    console.log("No items found");
}

// Also valid but less clear
if (!items.length) {       // Relies on truthy/falsy
    console.log("No items found");
}
```

## 2. if...else Statement

Provides an alternative code path when the condition is false.

```javascript
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside");
} else {
    console.log("It's not too hot");
}

// Real-world example: User authentication
function checkAccess(user) {
    if (user && user.isActive) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}

// Example with complex conditions
let hour = new Date().getHours();

if (hour >= 6 && hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good day!");
}
```

## 3. if...else if...else Statement

Handles multiple conditions in sequence.

```javascript
let grade = 85;

if (grade >= 90) {
    console.log("Excellent! Grade: A");
} else if (grade >= 80) {
    console.log("Good job! Grade: B");
} else if (grade >= 70) {
    console.log("Well done! Grade: C");
} else if (grade >= 60) {
    console.log("You passed! Grade: D");
} else {
    console.log("Need improvement. Grade: F");
}

// Real-world example: Shipping calculator
function calculateShipping(weight, distance) {
    let cost;
    
    if (weight <= 1) {
        cost = 5;
    } else if (weight <= 5) {
        cost = 10;
    } else if (weight <= 10) {
        cost = 15;
    } else {
        cost = 25;
    }
    
    // Apply distance multiplier
    if (distance > 1000) {
        cost *= 1.5;
    } else if (distance > 500) {
        cost *= 1.2;
    }
    
    return cost;
}
```

## 4. Nested if Statements

You can nest if statements inside other if statements for complex logic.

```javascript
let weather = "sunny";
let temperature = 25;

if (weather === "sunny") {
    if (temperature > 20) {
        console.log("Perfect day for outdoor activities!");
    } else {
        console.log("Sunny but a bit cold");
    }
} else if (weather === "rainy") {
    if (temperature > 15) {
        console.log("Warm rain, maybe just an umbrella");
    } else {
        console.log("Cold and rainy, stay inside");
    }
}

// User permission system
function checkUserPermissions(user, action) {
    if (user.isActive) {
        if (user.role === "admin") {
            return true; // Admins can do everything
        } else if (user.role === "editor") {
            if (action === "edit" || action === "view") {
                return true;
            }
        } else if (user.role === "viewer") {
            if (action === "view") {
                return true;
            }
        }
    }
    return false;
}
```

## 5. switch Statement

Provides a cleaner way to handle multiple specific values.

### Basic switch Syntax

```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Tuesday":
        console.log("Getting into the groove");
        break;
    case "Wednesday":
        console.log("Hump day!");
        break;
    case "Thursday":
        console.log("Almost there");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day");
}
```

### switch vs if...else if

```javascript
// Using switch (better for multiple specific values)
function getSeasonByMonth(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "Winter";
        case 3:
        case 4:
        case 5:
            return "Spring";
        case 6:
        case 7:
        case 8:
            return "Summer";
        case 9:
        case 10:
        case 11:
            return "Fall";
        default:
            return "Invalid month";
    }
}

// Using if...else if (better for ranges or complex conditions)
function getAgeGroup(age) {
    if (age < 0) {
        return "Invalid age";
    } else if (age < 13) {
        return "Child";
    } else if (age < 20) {
        return "Teenager";
    } else if (age < 65) {
        return "Adult";
    } else {
        return "Senior";
    }
}
```

### Advanced switch Examples

```javascript
// Calculator with switch
function calculate(num1, num2, operation) {
    switch (operation) {
        case '+':
        case 'add':
            return num1 + num2;
        case '-':
        case 'subtract':
            return num1 - num2;
        case '*':
        case 'multiply':
            return num1 * num2;
        case '/':
        case 'divide':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
}

// HTTP status code handler
function handleHttpStatus(statusCode) {
    switch (Math.floor(statusCode / 100)) {
        case 2:
            return "Success";
        case 3:
            return "Redirection";
        case 4:
            return "Client Error";
        case 5:
            return "Server Error";
        default:
            return "Unknown status";
    }
}

// Game state manager
function handleGameAction(action, gameState) {
    switch (action.type) {
        case 'MOVE_PLAYER':
            return {
                ...gameState,
                playerPosition: action.position
            };
        case 'COLLECT_ITEM':
            return {
                ...gameState,
                inventory: [...gameState.inventory, action.item],
                score: gameState.score + action.points
            };
        case 'GAME_OVER':
            return {
                ...gameState,
                isGameOver: true,
                finalScore: gameState.score
            };
        default:
            return gameState;
    }
}
```

## 6. Ternary Operator (Conditional Operator)

A concise way to write simple if...else statements.

### Basic Ternary

```javascript
// Syntax: condition ? valueIfTrue : valueIfFalse
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Equivalent if...else
let status2;
if (age >= 18) {
    status2 = "adult";
} else {
    status2 = "minor";
}
```

### Practical Ternary Examples

```javascript
// Setting default values
function greetUser(name) {
    return `Hello, ${name ? name : 'Guest'}!`;
    // Or with nullish coalescing: `Hello, ${name ?? 'Guest'}!`
}

// Conditional CSS classes
function getButtonClass(isPrimary, isDisabled) {
    return `btn ${isPrimary ? 'btn-primary' : 'btn-secondary'} ${isDisabled ? 'btn-disabled' : ''}`;
}

// Array operations
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0 ? true : false);
// Better: let evenNumbers = numbers.filter(num => num % 2 === 0);

// Nested ternary (use sparingly!)
let score = 85;
let grade = score >= 90 ? 'A' : 
            score >= 80 ? 'B' : 
            score >= 70 ? 'C' : 
            score >= 60 ? 'D' : 'F';

// Better as if...else if for readability
function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}
```

## 7. Short-Circuit Evaluation

Logical operators can be used for conditional execution.

### Logical AND (&&) for Conditional Execution

```javascript
// Only execute if condition is true
let user = { name: "John", isAdmin: true };

user.isAdmin && console.log("Admin panel available");
// Equivalent to: if (user.isAdmin) { console.log("Admin panel available"); }

// Conditional function call
let debugging = true;
debugging && logDebugInfo();

// Conditional property access
let config = { theme: { primary: "blue" } };
let primaryColor = config.theme && config.theme.primary;

// React-style conditional rendering (concept)
let showMessage = true;
let messageComponent = showMessage && "Welcome back!";
```

### Logical OR (||) for Default Values

```javascript
// Set default values
function processUser(userData) {
    let name = userData.name || "Anonymous";
    let age = userData.age || 0;
    let role = userData.role || "guest";
    
    return { name, age, role };
}

// Function parameter defaults (older approach)
function greet(name) {
    name = name || "World";
    return `Hello, ${name}!`;
}

// Modern approach with default parameters
function greetModern(name = "World") {
    return `Hello, ${name}!`;
}

// Chaining defaults
let value = userInput || sessionStorage.getItem('backup') || 'default';
```

## 8. Practical Examples

### Form Validation

```javascript
function validateRegistrationForm(formData) {
    let errors = [];
    
    // Email validation
    if (!formData.email) {
        errors.push("Email is required");
    } else if (!isValidEmail(formData.email)) {
        errors.push("Please enter a valid email");
    }
    
    // Password validation
    if (!formData.password) {
        errors.push("Password is required");
    } else {
        if (formData.password.length < 8) {
            errors.push("Password must be at least 8 characters");
        }
        if (!/\d/.test(formData.password)) {
            errors.push("Password must contain at least one number");
        }
        if (!/[A-Z]/.test(formData.password)) {
            errors.push("Password must contain at least one uppercase letter");
        }
    }
    
    // Age validation
    if (formData.age !== undefined) {
        if (formData.age < 13) {
            errors.push("Must be at least 13 years old");
        } else if (formData.age > 120) {
            errors.push("Please enter a valid age");
        }
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}
```

### Game Logic

```javascript
class Player {
    constructor(name, health = 100) {
        this.name = name;
        this.health = health;
        this.level = 1;
        this.experience = 0;
    }
    
    takeDamage(damage) {
        this.health -= damage;
        
        if (this.health <= 0) {
            this.health = 0;
            console.log(`${this.name} has been defeated!`);
            return "defeated";
        } else if (this.health <= 20) {
            console.log(`${this.name} is critically injured!`);
            return "critical";
        } else if (this.health <= 50) {
            console.log(`${this.name} is injured.`);
            return "injured";
        } else {
            console.log(`${this.name} took ${damage} damage.`);
            return "healthy";
        }
    }
    
    gainExperience(exp) {
        this.experience += exp;
        
        // Check for level up
        let requiredExp = this.level * 100;
        if (this.experience >= requiredExp) {
            this.levelUp();
        }
    }
    
    levelUp() {
        this.level++;
        this.experience = 0;
        this.health = 100; // Full heal on level up
        console.log(`${this.name} leveled up to level ${this.level}!`);
    }
}
```

### Shopping Cart System

```javascript
class ShoppingCart {
    constructor() {
        this.items = [];
        this.currency = 'USD';
    }
    
    addItem(product, quantity = 1) {
        // Validate inputs
        if (!product || !product.id || !product.price) {
            throw new Error("Invalid product");
        }
        
        if (quantity <= 0) {
            throw new Error("Quantity must be positive");
        }
        
        // Check if item already exists
        let existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }
    
    calculateTotal() {
        let subtotal = this.items.reduce((sum, item) => {
            return sum + (item.product.price * item.quantity);
        }, 0);
        
        // Apply discounts based on total
        let discount = 0;
        if (subtotal >= 100) {
            discount = subtotal * 0.1; // 10% off orders over $100
        } else if (subtotal >= 50) {
            discount = subtotal * 0.05; // 5% off orders over $50
        }
        
        // Calculate shipping
        let shipping = 0;
        if (subtotal < 25) {
            shipping = 5.99;
        } else if (subtotal < 50) {
            shipping = 3.99;
        }
        // Free shipping for orders $50+
        
        let tax = (subtotal - discount) * 0.08; // 8% tax
        let total = subtotal - discount + shipping + tax;
        
        return {
            subtotal: Number(subtotal.toFixed(2)),
            discount: Number(discount.toFixed(2)),
            shipping: Number(shipping.toFixed(2)),
            tax: Number(tax.toFixed(2)),
            total: Number(total.toFixed(2))
        };
    }
    
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }
}
```

## Common Mistakes to Avoid

1. **Using assignment (`=`) instead of comparison (`==` or `===`)**
2. **Forgetting `break` statements in switch cases**
3. **Not handling the `default` case in switch statements**
4. **Creating overly nested if statements** (consider early returns)
5. **Not considering edge cases** (null, undefined, empty strings)
6. **Overusing ternary operators** for complex conditions

## Best Practices

1. **Use strict equality (`===`)** instead of loose equality (`==`)
2. **Keep conditions simple and readable**
3. **Use early returns** to reduce nesting
4. **Consider switch statements** for multiple specific values
5. **Use meaningful variable names** for boolean conditions
6. **Handle edge cases** explicitly
7. **Use consistent formatting** for readability

### Example of Early Returns

```javascript
// Instead of deep nesting
function processUser(user) {
    if (user) {
        if (user.isActive) {
            if (user.hasPermission) {
                return doProcessing(user);
            } else {
                return "No permission";
            }
        } else {
            return "User not active";
        }
    } else {
        return "No user provided";
    }
}

// Use early returns
function processUserBetter(user) {
    if (!user) return "No user provided";
    if (!user.isActive) return "User not active";
    if (!user.hasPermission) return "No permission";
    
    return doProcessing(user);
}
```

## Summary

| Statement Type | Use Case | Example |
|----------------|----------|---------|
| `if` | Single condition | `if (age >= 18)` |
| `if...else` | Two alternatives | `if (isValid) {...} else {...}` |
| `if...else if` | Multiple conditions | Grade calculation |
| `switch` | Multiple specific values | Day of week, menu options |
| Ternary `? :` | Simple conditional expressions | `status = age >= 18 ? 'adult' : 'minor'` |
| Short-circuit | Quick conditional execution | `user.isAdmin && showAdminPanel()` |

Choose the right conditional structure based on your specific needs for clarity and maintainability!