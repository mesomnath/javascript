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

