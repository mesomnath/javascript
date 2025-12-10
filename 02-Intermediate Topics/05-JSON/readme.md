# JSON (JavaScript Object Notation)

## Overview

JSON stands for **J**ava**S**cript **O**bject **N**otation. It is a lightweight, text-based format for storing and transporting data. Although it originated from JavaScript, it is now a language-independent data format, and parsers for it are available in virtually every programming language.

JSON is often used to send data from a server to a web page (and vice-versa). It's the de facto standard for data exchange on the web, having largely replaced XML.

## Why Use JSON?

-   **Human-Readable**: The syntax is minimal and easy for humans to read and write.
-   **Machine-Readable**: It's very easy for machines to parse and generate.
-   **Language-Independent**: It's a text format, and libraries for handling it exist in all major languages (Python, Java, C#, PHP, etc.).
-   **Based on JavaScript**: The syntax is a subset of JavaScript's object literal syntax, making it extremely easy to work with in JavaScript.

## JSON Syntax Rules

JSON syntax is very strict. Any deviation will cause parsing errors.

1.  **Data is in name/value pairs**: ` "name": "John" `
2.  **Keys must be strings**: Keys (names) must be enclosed in **double quotes**. Single quotes are not allowed.
3.  **Values must be a valid JSON data type**:
    -   `string` (in double quotes)
    -   `number` (integer or floating-point)
    -   `object` (another JSON object)
    -   `array`
    -   `boolean` (`true` or `false`)
    -   `null`
4.  **Data is separated by commas**: Each name/value pair is separated by a comma.
5.  **Objects are enclosed in curly braces**: `{}`
6.  **Arrays are enclosed in square brackets**: `[]`
7.  **No comments, functions, or `undefined`**: JSON is purely a data format. It cannot contain comments, functions, or the `undefined` value.

### Example of a JSON Object

This example represents a user object with various data types.

```json
{
  "id": 101,
  "firstName": "John",
  "lastName": "Doe",
  "isActive": true,
  "email": null,
  "courses": [
    {
      "title": "JavaScript Fundamentals",
      "credits": 3
    },
    {
      "title": "Advanced CSS",
      "credits": 4
    }
  ],
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  }
}
```

**Common Mistakes:**
-   Using single quotes instead of double quotes for keys or string values.
-   Having a trailing comma after the last element in an object or array.
-   Including comments or functions.

---

## Working with JSON in JavaScript

JavaScript provides a built-in `JSON` object with two main methods for handling JSON data.

### 1. `JSON.stringify()` - Converting a JavaScript Object to a JSON String

This method takes a JavaScript object and converts it into a JSON string. This process is called **serialization**.

```javascript
// A JavaScript object
const user = {
    name: "Alice",
    age: 30,
    isAdmin: false,
    courses: ["HTML", "CSS", "JS"],
    plan: null,
    // This function will be ignored by JSON.stringify()
    greet: function() {
        console.log("Hello!");
    },
    // This property with `undefined` will also be ignored
    something: undefined
};

// Convert the object to a JSON string
const jsonString = JSON.stringify(user);

console.log(jsonString);
// Output:
// {"name":"Alice","age":30,"isAdmin":false,"courses":["HTML","CSS","JS"],"plan":null}

// Notice that the `greet` function and the `something` property are gone.
```

`JSON.stringify()` can also take optional arguments for formatting the output:

```javascript
// The third argument specifies the number of spaces to use for indentation.
const formattedJsonString = JSON.stringify(user, null, 2);

console.log(formattedJsonString);
/*
Output:
{
  "name": "Alice",
  "age": 30,
  "isAdmin": false,
  "courses": [
    "HTML",
    "CSS",
    "JS"
  ],
  "plan": null
}
*/
```

### 2. `JSON.parse()` - Converting a JSON String to a JavaScript Object

This method takes a JSON string and converts it back into a JavaScript object. This process is called **deserialization**.

```javascript
const jsonStringFromServer = '{ "id": 205, "product": "Laptop", "inStock": true }';

// Parse the JSON string into a JavaScript object
const productObject = JSON.parse(jsonStringFromServer);

console.log(productObject);
// Output: { id: 205, product: 'Laptop', inStock: true }

// Now you can access its properties like a normal object
console.log(productObject.product); // "Laptop"
```

**Important**: The text you pass to `JSON.parse()` must be valid JSON, or it will throw a `SyntaxError`.

```javascript
// This will cause an error because the key `name` is not in double quotes.
const invalidJson = "{ name: 'Bob' }"; 

try {
    JSON.parse(invalidJson);
} catch (error) {
    console.error("Parsing failed:", error); // Parsing failed: SyntaxError
}
```

---

## Common Use Case: Fetching Data from an API

Most web APIs return data in JSON format. The `fetch` API in modern browsers has a built-in `.json()` method to automatically parse the response body.

```javascript
const apiUrl = "https://api.github.com/users/github";

async function fetchGitHubUser() {
    try {
        // 1. Fetch the data from the server.
        const response = await fetch(apiUrl);

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // 2. The .json() method reads the response stream to completion
        //    and parses the body text as JSON.
        //    It returns a promise that resolves with the resulting JavaScript object.
        const userData = await response.json();

        // 3. Now you can work with the JavaScript object.
        console.log("User Name:", userData.name);
        console.log("Public Repos:", userData.public_repos);
        console.log("Company:", userData.company);

    } catch (error) {
        console.error("Could not fetch user data:", error);
    }
}

fetchGitHubUser();
```

In this example, `response.json()` handles the `JSON.parse()` step for you, making the process seamless.

## Summary

-   **JSON** is a text-based data format used for data exchange.
-   It has a strict syntax: double quotes for keys and strings, no comments, no functions.
-   `JSON.stringify()`: Converts a JavaScript object to a JSON string.
-   `JSON.parse()`: Converts a JSON string into a JavaScript object.
-   It is the most common format for data returned from web APIs.