# Asynchronous JavaScript

## 📌 Understanding Async Programming

JavaScript is single-threaded but can handle async operations using callbacks, promises, and async/await.

## Callbacks

```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log(data);
});
```

### Callback Hell
```javascript
// Pyramid of doom!
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                // ...
            });
        });
    });
});
```

## Promises

```javascript
// Creating a promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve({ data: "Success!" });
        } else {
            reject("Error occurred");
        }
    }, 1000);
});

// Consuming promise
promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Done"));
```

### Promise Chaining
```javascript
fetch('https://api.example.com/user')
    .then(response => response.json())
    .then(user => fetch(`https://api.example.com/posts/${user.id}`))
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.error(error));
```

### Promise Methods
```javascript
// Promise.all - wait for all
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.race - first to resolve/reject
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Promise.allSettled - wait for all (ES2020)
Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));

// Promise.any - first to resolve (ES2021)
Promise.any([promise1, promise2])
    .then(result => console.log(result));
```

## Async/Await

```javascript
// Async function returns a promise
async function fetchUser() {
    try {
        const response = await fetch('https://api.example.com/user');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error:", error);
    }
}

// Using async function
fetchUser().then(user => console.log(user));
```

### Multiple Async Operations
```javascript
// Sequential (slower)
async function sequential() {
    const user = await fetchUser();
    const posts = await fetchPosts();
    return { user, posts };
}

// Parallel (faster)
async function parallel() {
    const [user, posts] = await Promise.all([
        fetchUser(),
        fetchPosts()
    ]);
    return { user, posts };
}
```

## Error Handling

```javascript
// try...catch with async/await
async function getData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch:", error);
        throw error;
    }
}

// Promise catch
promise
    .then(data => processData(data))
    .catch(error => handleError(error));
```

## Event Loop

```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

// Output: 1, 4, 3, 2
// Microtasks (promises) run before macrotasks (setTimeout)
```

## Interview Questions

**Q: What is the difference between synchronous and asynchronous?**
A: Sync code blocks execution. Async code doesn't block, allows other code to run.

**Q: What is a Promise?**
A: Object representing eventual completion or failure of an async operation.

**Q: Promise states?**
A: Pending, Fulfilled (resolved), Rejected.

**Q: Difference between Promise.all and Promise.race?**
A: `all` waits for all promises. `race` resolves/rejects with first settled promise.

**Q: What is async/await?**
A: Syntactic sugar over promises, makes async code look synchronous.

**Q: Can you use await without async?**
A: No (except top-level await in modules - ES2022).

[See Prototypes](../02-Prototypes/README.md) | [Continue to ES6+](../04-ES6-Plus/README.md)
