# Performance Optimization

## 📌 Writing High-Performance JavaScript

Optimize your code for speed, efficiency, and better user experience.

## Memory Management

### Avoiding Memory Leaks
```javascript
// ❌ Memory leak - event listener not removed
element.addEventListener('click', handleClick);

// ✅ Remove when done
element.removeEventListener('click', handleClick);

// ❌ Memory leak - forgotten timer
setInterval(() => { }, 1000);

// ✅ Clear when done
const intervalId = setInterval(() => { }, 1000);
clearInterval(intervalId);

// ❌ Memory leak - closures holding references
function createHugeArray() {
    const huge = new Array(1000000);
    return function() {
        console.log(huge[0]); // Keeps entire array in memory
    };
}
```

### Garbage Collection
```javascript
// Help GC by nullifying references
let heavyObject = { /* large data */ };
// ... use object
heavyObject = null; // Release for GC
```

## Debouncing

Limit function execution rate during rapid events.

```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage: Search input
const searchInput = document.querySelector('#search');
const debouncedSearch = debounce(function(event) {
    console.log('Searching...', event.target.value);
}, 300);

searchInput.addEventListener('input', debouncedSearch);
```

## Throttling

Ensure function executes at most once per interval.

```javascript
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage: Scroll handler
const handleScroll = throttle(function() {
    console.log('Scroll position:', window.scrollY);
}, 1000);

window.addEventListener('scroll', handleScroll);
```

## Lazy Loading

```javascript
// Image lazy loading
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Module lazy loading
async function loadModule() {
    if (condition) {
        const module = await import('./heavy-module.js');
        module.init();
    }
}
```

## Code Splitting

```javascript
// Dynamic imports for code splitting
document.querySelector('#feature-button').addEventListener('click', async () => {
    const { Feature } = await import('./feature.js');
    new Feature().init();
});
```

## Performance Optimization Techniques

### Loop Optimization
```javascript
// ❌ Slow - recalculates length each iteration
for (let i = 0; i < array.length; i++) { }

// ✅ Faster - cache length
for (let i = 0, len = array.length; i < len; i++) { }

// ✅ Best - use built-in methods when possible
array.forEach(item => { });
```

### DOM Optimization
```javascript
// ❌ Slow - multiple reflows
for (let i = 0; i < 100; i++) {
    document.body.innerHTML += `<div>${i}</div>`;
}

// ✅ Faster - batch updates
let html = '';
for (let i = 0; i < 100; i++) {
    html += `<div>${i}</div>`;
}
document.body.innerHTML = html;

// ✅ Best - DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);
```

### Event Delegation
```javascript
// ❌ Multiple listeners
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', handleClick);
});

// ✅ Single listener on parent
document.querySelector('.container').addEventListener('click', (e) => {
    if (e.target.classList.contains('item')) {
        handleClick(e);
    }
});
```

## Performance Measurement

### Performance API
```javascript
// Measure function execution time
const start = performance.now();
expensiveOperation();
const end = performance.now();
console.log(`Took ${end - start}ms`);

// Mark and measure
performance.mark('start-operation');
expensiveOperation();
performance.mark('end-operation');
performance.measure('operation', 'start-operation', 'end-operation');

// Get measurements
const measures = performance.getEntriesByName('operation');
console.log(measures[0].duration);
```

### Console timing
```javascript
console.time('operation');
expensiveOperation();
console.timeEnd('operation');
```

## Web Workers

Offload heavy computations to background threads.

```javascript
// main.js
const worker = new Worker('worker.js');

worker.postMessage({ data: heavyData });

worker.onmessage = (e) => {
    console.log('Result:', e.data);
};

// worker.js
self.onmessage = (e) => {
    const result = expensiveCalculation(e.data);
    self.postMessage(result);
};
```

## Interview Questions

**Q: What is debouncing?**
A: Delaying function execution until after a pause in events. Useful for search inputs, resize handlers.

**Q: What is throttling?**
A: Limiting function execution to once per time interval. Useful for scroll, mousemove handlers.

**Q: How do you prevent memory leaks?**
A: Remove event listeners, clear timers, nullify references, avoid accidental globals.

**Q: What is lazy loading?**
A: Loading resources only when needed, improving initial load time.

**Q: What are Web Workers?**
A: JavaScript threads for running heavy computations without blocking main thread.

[See Expert README](../README.md) | [Continue to Design Patterns](../02-Design-Patterns/README.md)
