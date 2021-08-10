//variable declaration
let typeCheck;


// String conversion using function
//Number to string conversion
typeCheck=4545;
typeCheck=String(typeCheck);

// Date to string
typeCheck=new Date();
typeCheck=String(typeCheck);

// Boolean to string
typeCheck= false;
typeCheck=String(typeCheck);

// Array to string
typeCheck=[1,2,3,4,'yeasin'];
typeCheck=String(typeCheck);

// String conversion using method
typeCheck=123456;
typeCheck=typeCheck.toString();


// Number conversion using function
// String to number
typeCheck='666';
typeCheck=Number(typeCheck);

// Boolean to number
typeCheck=false;
typeCheck=Number(typeCheck);

// Text to number
typeCheck= 'ka me ha me haaaaa';
typeCheck=Number(typeCheck);

// other ways
typeCheck='666.666';
typeCheck=parseInt(typeCheck);
typeCheck=parseFloat(typeCheck);

// Fix decimal number
typeCheck=typeCheck.toFixed(3);
// Concatation(string er jog)
val1='66  ';
val2=6;
typeCheck=val1+val2;


// check output & data type in console
console.log(typeCheck);
console.log(typeof typeCheck);

//Check length
console.log(typeCheck.length);
