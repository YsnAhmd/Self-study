// Function is a set of statements that takes some input and returns some output where there is relationship between input and output.
//Defining a function
function myFun(a,b) {
    console.log(a+b);
}

// Calling or invoking a function
myFun(2,3);

//Return statement
//If  the function is needed to return only value return statement must be used. 
function myFunc2(a,b) {
    return a*b
}
console.log(myFunc2(2,3))

//Function expression
//Function expressions are function without name property.
x=function (a) {
    console.log(a)
}
x('ami'); //The variable x works like a function 

//Function Hoisting
//JavaScript has a hoisting system for named function. and what hoisting means? its mean you can use a function before declaring. But this hoisting only works for named function so function expressions and arrow functions will not be hoisted.
myFunc3(5,10)

function myFunc3(a,b) {
    console.log(a,b)
}

//Function scope
let name='Yeasin'; //Here name is a global variable
console.log(name);
function myName(a) {
    let name =a; //Here name is a local variable
    console.log(name);
}
myName('Hridoy');

// Recursive Function 
//A function which can call itself is a recursive function. A recursive function is simillar to a loop and uses functional stack.

function reFuc(a) {
    if  (a<0)
    return;
    console.log(`Begins with:- ${a}.`)
    reFuc(a-1);
    console.log(`Ends with:- ${a}.`)
}

reFuc(2);

//Default parameters
function myFun4(a,b=1) {
    return console.log(a+b);
}
myFun4(2); //Here 2nd argument wasnt given but it takes 1 as the default value.

