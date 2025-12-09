console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (quirk!)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 123n);        // "bigint"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
console.log(typeof {"json":"dfd"})
console.log(typeof alert);


/*
 === means it will verify both the values along with data type. if value along with data type is mismatched It will return false.
*/

let a = 3;
let b = "3";

console.log(a==b); //true
console.log(a===b); // false