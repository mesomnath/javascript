# Error Handling in JavaScript

## 📌 Managing Errors Gracefully

Error handling allows your program to respond to and recover from errors instead of crashing.

## try...catch...finally
```javascript
try {
    // Code that may throw error
    riskyOperation();
} catch (error) {
    // Handle error
    console.error(error.message);
} finally {
    // Always executes
    cleanup();
}
```

## Error Types
- `Error` - Generic error
- `SyntaxError` - Invalid syntax
- `ReferenceError` - Invalid reference
- `TypeError` - Wrong type
- `RangeError` - Out of range value

## throw Statement
```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
```

## Custom Errors
```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

throw new ValidationError("Invalid email");
```

## Error Object Properties
- `name` - Error type
- `message` - Error description
- `stack` - Stack trace

## Best Practices
- Don't catch errors you can't handle
- Log errors for debugging
- Provide user-friendly messages
- Use finally for cleanup
- Validate input to prevent errors

## Async Error Handling
```javascript
// Promises
fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));

// Async/Await
async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
```

## Interview Questions

**Q: What is the difference between throw and return?**
A: throw stops execution and passes control to nearest catch block. return passes value back to caller.

**Q: What is the purpose of finally block?**
A: Executes code regardless of whether error occurred, useful for cleanup operations.

**Q: How do you create custom errors?**
A: Extend the Error class: `class CustomError extends Error {}`

**Q: What happens if error is not caught?**
A: Uncaught errors terminate script execution and are logged to console.

[See Events](../05-Events/README.md) | [Continue to Advanced](../../03-Advanced/README.md)
