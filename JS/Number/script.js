let number = 0.1010;
let x = 999999999999999;
let y = 10e5;
//JavaScript has only one type of numbers: floating point numbers. And they are naturally 64 bit and integer are accurate up to 15 digits.

//JavaSCript floating point arithmetic is not always 100% accurate.
let z = 0.2 + 0.1;
console.log(z); // the result isn't 0.3 like it should be.

//Adding number and string
let a = 10;
let b = "10b";
console.log(a + b); // This will concatinate number 10 and string  10 and returns the result as a string.

//Numeric String
let c = "10";
let d = "20";
console.log(c /d); // This will devide numeric string 10 and numeric  string  20 and returns the result as a number. + operator doesnt work with numeric string.


//NaN
//NaN is a special value that represents an error. it is a number and the typeof operator will return "number".
console.log(typeof NaN); // This will return "number"

//isNaN()
console.log(isNaN(a)); // This will return false because a is a number.
console.log(isNaN(b)); // This will return true because b isn't a number.

//Infinity
//Infinity is a special value that represents an infinite number. it is a number and the typeof operator will return "number".

//isFinite()
console.log(isFinite(a)); // This will return true because a is a finite number.

//Number system
//Binary. Binary is a number system with only two digits 0 and 1. Binary numbers are used to represent binary data where 0 means ON and 1 means OFF.
//Octal. Octal is a number system with only 8 digits 0 to 7.
//Decimal. Decimal is a number system with 10 digits 0 to 9.
//Hexadecimal. Hexadecimal is a number system with 16 digits 0 to 9 and A to F.
//Number conversion
//Decimal to Binary, Octal and Hexadecimal
console.log(Number.parseInt(1010, 2)); // This will convert binary 1010 to decimal.
console.log(Number.parseInt(11, 8)); // This will convert octal 8 to decimal.
console.log(Number.parseInt(18, 16)); // This will convert hexadecimal 18 to decimal.
console.log(a.toString(2)); // This will convert decimal 10 to binary.

//Number methods and properties
//tostring()
console.log(a.toString()); // This will convert number 10 to string.

//toExponential()
let e = 1.55555;
console.log(e.toExponential(2)); // This will convert number 1.55555 to exponential format. It returns a string.

//toFixed()
console.log(e.toFixed(2)); // This will convert number 1.55555 to fixed format. the result is a string.

//toPrecision()
console.log(e.toPrecision(3)); // This will convert number 1.55555 to precision format. the result is a string.

//valueOf()
console.log(e.valueOf());  //this will return the value of variable e and the result is a number.

//Converting to number
//parseInt()
console.log(parseInt("   10.10")); // This will convert string 10 to number 10.

//parseFloat()
console.log(parseFloat("10.10")); // This will convert string 10.10 to number 10.10.

//Number()
console.log(Number("    10     ")); // This will convert string 10 to number 10.

//Number Properties
//MAX_VALUE
console.log(Number.MAX_VALUE);
//MIN_VALUE
console.log(Number.MIN_VALUE);
//POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY);
//NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY);
//NaN
console.log(Number.NaN);
