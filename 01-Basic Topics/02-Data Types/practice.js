console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (quirk!)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 123n);        // "bigint"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"/ "function object"
console.log(typeof {"json":"dfd"}) //object
console.log(typeof alert);  // undefined


/*
 === means it will verify both the values along with data type. if value along with data type is mismatched It will return false.
*/

let a = 3;
let b = "3";

console.log(a==b); //true
console.log(a===b); // false

//--- Primitive data type -----//

// there are total 7 data types: string, number, boolean, undefined, null, bigint, Symbol

//----- Reference (Non-primitive data type)
// array, objects, functions
//*** All non primitive data type has a Object data type.  */
const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "somnath",
    age: 22
}
// arrays started with [], and objects started with {}

const myFunction = function(){
    console.log("hello world");
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack memory(used in premitive data type), heap memory (non-premitive datatype)
/*
stack memory used to stored the values of premitive data types and it is copying the data so the values are not overriding each other

heap memory used to reference the values of non-premitive data and it is referencing the values, so the values are overiding each other


*/
//stack memory
let userName = "somnathsahu";
let anotherUserName = userName;
anotherUserName = "somnath";

console.log(userName); //somnathsahu
console.log(anotherUserName); //somnath

//heap memory
let userDetails={
    email: "user@gmail.com",
    location: "IN"
}

let anotherUserDetails = userDetails;
anotherUserDetails.email = "newuser@gmail.com";

console.log(userDetails.email); // "newuser@gmail.com"
console.log(anotherUserDetails.email); //"newuser@gmail.com"


