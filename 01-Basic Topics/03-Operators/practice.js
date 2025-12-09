let score = 33
let count = "4"


console.log(typeof score); //number
console.log(typeof count) // string

// conversion
let valueInNumber =  Number(count);
console.log(typeof valueInNumber); // number

// converison from string to int
let countDigit = "42aa"
let convertedCountDigit = Number(countDigit)
console.log(typeof convertedCountDigit); // number
console.log(convertedCountDigit) //NaN

let spacer = " ";
let booleanSpacer = Boolean(spacer);
console.log(booleanSpacer);


/*
 conversion from string to number -> Number()
 "33" => 33
 "33abc" => NaN
 true => 1; false => 0

 conversion for Boolean method Boolen()
 1 => true; 0 => false
 ""=> false; " " => true (space included)
 "somnath" => true

 conversion for String using String() method
 33 => "33"
 */



 console.log("2"> 1); // true
 console.log("02">1); //true

 console.log(null > 0); //false
 console.log(null == 0); //false
 console.log(null >= 0); // true

 
 console.log(undefined == 0); //false
 console.log(undefined >0); //false
 console.log(undefined<0); //false

 /*
The reason is the an equality check == and comparizons ><>= work differently.
comparisons convert null to a number, treating it as 0. that's why (3) null >= 0 is true and null >0 is false.
 */