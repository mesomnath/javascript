// variable
/**
 *  in a nutshell majorly 3 types of variable present in JS : var, let, const
 * var is function scoped, can be re-declared anytime so it may lead to confusion. So it become deprecated now.
 * let is blocked scoped can not be re-declared in same scope but the value can be updated or changed. major it is used now.
 * const is also blocked scoped can not be re-declared in same scope and the value can not be updated or changed. It can be used for constant values like pi value etc.
 * 
 * JS is dynamic type language means we don't need to declare the type of variable explicitly. It will be determined at runtime based on the assigned value.
 * A variable can hold different types of values at different times during the execution of a program.  
 */
var age = 25;
var name = "John Doe";

function greet() {
    var message = "Hello, " + name;
    console.log(message); // Hello, John Doe
    
}
console.log(message); // This will cause an error because 'message' is not defined in this scope


greet();

let a = 10;
console.log(a); // This will work fine

{
    let b = 20;
    console.log(b); // 20
}

console.log(b); // This will cause an error because 'b' is not defined in this scope

a = 30; // This will cause an error because 'a' has already been declared in the same scope
//dynamic type language
a = "Hello"; 
a = true; 
a = null; 
console.log(a); 

const c = 10
c = 20; // This will cause an error because 'c' is a constant and cannot be reassigned
console.log(c);
