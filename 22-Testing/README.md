# JavaScript Testing

## 📌 Testing Your Code

Testing ensures code works correctly and prevents bugs from reaching production.

## Types of Tests

### 1. Unit Tests
Test individual functions/components in isolation.

### 2. Integration Tests
Test how multiple units work together.

### 3. End-to-End (E2E) Tests
Test complete user workflows in browser.

## Writing Testable Code

```javascript
// ❌ Hard to test
function process() {
    const data = fetch('https://api.example.com/data');
    const result = transform(data);
    saveToDatabase(result);
}

// ✅ Easy to test (dependency injection)
function process(fetcher, transformer, saver) {
    const data = fetcher();
    const result = transformer(data);
    saver(result);
}

// ✅ Pure functions are easiest to test
function add(a, b) {
    return a + b;
}
```

## Unit Testing Example (Jest)

```javascript
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

// math.test.js
import { add, subtract, multiply } from './math';

describe('Math functions', () => {
    test('add returns sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
    });
    
    test('subtract returns difference', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(3, 5)).toBe(-2);
    });
    
    test('multiply returns product', () => {
        expect(multiply(3, 4)).toBe(12);
        expect(multiply(-2, 3)).toBe(-6);
    });
});
```

## Testing Async Code

```javascript
// fetchUser.js
export async function fetchUser(id) {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
        throw new Error('User not found');
    }
    return response.json();
}

// fetchUser.test.js
import { fetchUser } from './fetchUser';

describe('fetchUser', () => {
    test('fetches user successfully', async () => {
        const user = await fetchUser(1);
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('email');
    });
    
    test('throws error for invalid user', async () => {
        await expect(fetchUser(999)).rejects.toThrow('User not found');
    });
});
```

## Mocking

```javascript
// userService.js
export class UserService {
    constructor(api) {
        this.api = api;
    }
    
    async getUser(id) {
        return await this.api.fetch(`/users/${id}`);
    }
}

// userService.test.js
import { UserService } from './userService';

describe('UserService', () => {
    test('getUser calls API correctly', async () => {
        // Mock API
        const mockApi = {
            fetch: jest.fn().mockResolvedValue({ id: 1, name: 'John' })
        };
        
        const service = new UserService(mockApi);
        const user = await service.getUser(1);
        
        expect(mockApi.fetch).toHaveBeenCalledWith('/users/1');
        expect(user.name).toBe('John');
    });
});
```

## Test-Driven Development (TDD)

Write tests before implementation!

```javascript
// Step 1: Write failing test
test('calculateDiscount applies 10% discount', () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
});

// Step 2: Write minimal code to pass
function calculateDiscount(price, rate) {
    return price - (price * rate);
}

// Step 3: Refactor
function calculateDiscount(price, rate) {
    if (typeof price !== 'number' || typeof rate !== 'number') {
        throw new TypeError('Arguments must be numbers');
    }
    if (rate < 0 || rate > 1) {
        throw new RangeError('Rate must be between 0 and 1');
    }
    return price * (1 - rate);
}
```

## Common Testing Patterns

### AAA Pattern
```javascript
test('user can be created', () => {
    // Arrange
    const userData = {
        name: 'John',
        email: 'john@example.com'
    };
    
    // Act
    const user = new User(userData);
    
    // Assert
    expect(user.name).toBe('John');
    expect(user.email).toBe('john@example.com');
});
```

### Setup and Teardown
```javascript
describe('Database tests', () => {
    let db;
    
    beforeAll(() => {
        // Runs once before all tests
        db = connectToDatabase();
    });
    
    afterAll(() => {
        // Runs once after all tests
        db.disconnect();
    });
    
    beforeEach(() => {
        // Runs before each test
        db.clear();
    });
    
    afterEach(() => {
        // Runs after each test
        // Cleanup if needed
    });
    
    test('can insert user', () => {
        db.insert({ name: 'John' });
        expect(db.count()).toBe(1);
    });
});
```

## Code Coverage

```javascript
// Run tests with coverage
// npm test -- --coverage

// Coverage report shows:
// - Statement coverage
// - Branch coverage
// - Function coverage
// - Line coverage

// Aim for high coverage (80-100%)
```

## Testing Best Practices

```javascript
// ✅ Test one thing at a time
test('add returns sum', () => {
    expect(add(2, 3)).toBe(5);
});

// ✅ Use descriptive test names
test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow();
});

// ✅ Test edge cases
test('handles empty array', () => {
    expect(sum([])).toBe(0);
});

test('handles negative numbers', () => {
    expect(add(-5, 3)).toBe(-2);
});

// ✅ Keep tests independent
// Each test should run in isolation

// ✅ Don't test implementation details
// Test behavior, not internal implementation
```

## Interview Questions

**Q: What is unit testing?**
A: Testing individual functions/components in isolation to ensure they work correctly.

**Q: What is TDD?**
A: Test-Driven Development - writing tests before implementation. Red (fail) → Green (pass) → Refactor.

**Q: What is mocking?**
A: Creating fake objects/functions to simulate dependencies in tests.

**Q: What is code coverage?**
A: Percentage of code executed during tests. Measures how well code is tested.

**Q: What is the AAA pattern?**
A: Arrange (setup) → Act (execute) → Assert (verify). Standard test structure.

**Q: Why write tests?**
A: Catch bugs early, document code behavior, enable refactoring with confidence, improve design.

[See Best Practices](../03-Best-Practices/README.md) | [Continue to Ecosystem](../05-Ecosystem/README.md)
