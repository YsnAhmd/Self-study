let string1 = 'This is a string';
let string2 ='This is another string';

// Sting properties
console.log(string1.constructor); //Returns the string's constructor function
console.log(string1.length);  //Returns the length of a string
console.log(string1.prototype='12');  //	Allows you to add properties and methods to an object

//Escape Character
// using \ to escape character
let text = "This is \"a\" text";
console.log(text);
let text2 = 'This is \ta text';
console.log(text2);
let text3 = 'jhwejhwj whjbwjjwe \
hdwhdjwhw';
console.log(text3);

// String methods
// charAt() 
console.log(string1.charAt(1)); //Returns the character at the specified index (position)

// charCodeAt() 
console.log(string2.charCodeAt(2)); //Returns the Unicode of the character at the specified index

// concat() 
console.log(string1.concat(" ",string2)); //Joins two or more strings

// endsWith() 
console.log(string1.endsWith('string')); //Checks whether a string ends with specified string/characters

// fromCharCode() 
console.log(String.fromCharCode(114,81)); //Converts Unicode values to characters
console.log('\uD83C\uDF03');

// includes() 
console.log(string1.includes('string')); //Checks whether a string contains the specified string/characters

// indexof()
console.log(string1.indexOf('string')); //Returns the position of the first found occurrence of a specified value in a string

// lastIndexof()
console.log(string1.lastIndexOf('string'),6); //Returns the position of the last found occurrence of a specified value in a string

// localCompare()
 //console.log(string1.localCompare(string2));

// repeat()
console.log(string1.repeat(3)); //Returns a new string with a specified number of copies of an existing 

//replace()
let string3 = string1.replace('string','text'); //Replaces all occurrences of a specified value in a string with a new value
console.log(string3);

// search() 
console.log(string1.search('string')); //Searches a string for a specified value, or regular expression, and returns the position of the match

// slice()
let text4='0123456789';
console.log(text4.slice(2,6)); //Extracts a part of a string and returns a new string

//substring()
console.log(text4.substring(2,6)); //Extracts a part of a string and returns a new string

//substr()
console.log(text4.substr(2,6)); //Extracts the characters from a string, beginning at a specified start position, and through the specified number of character

// split()
console.log(string1.split(' ')); //Splits a string into an array of substrings

// toUpperCase()
console.log(string1.toUpperCase()); //Converts a string to uppercase letters

// toLowerCase()
console.log(string2.toLowerCase()); //Converts a string to lowercase letters

//trim()
let text5 = '   hello world   ';
console.log(text5.trim()); //Removes whitespace from both ends of a string

//padStart()
console.log(text5.padStart(5,'x')); //Pads a string with a given value, starting from the beginning

//padEnd()
console.log(text5.padEnd(5,'x')); //Pads a string with a given value, starting from the end

//Property access
console.log(text5[3]); //Returns the character at the specified index like array

//string.match()
console.log(text5.match('string')); //Returns the matches when a string is searched for a match

//startswith()
console.log(text5.startsWith('hello')); //Checks whether a string begins with specified characters

//String/Templete literals
let nam = `John`;
let age = 25;
let sentence = `My name is ${nam} and I am ${age} years old.`; //Interpolation of string
console.log(sentence);