let num1=15;
let num2 = 10;


// If....else condition
// Basic if statement
if (num1!==num2) {
    console.log('Their value and datatype is same');
}else{
    console.log(`Their value and datatype isn't same`);
}


//There can be more than 2 conditions to apply and to do this JavaScript has else if like all other programming languages.
if (num1>num2) {
    console.log(`${num1} is bigger than ${num2}`);
}else if (num1<num2) {
    console.log(`${num1} is smaller than ${num2}`);
} else{
    console.log(`${num1} and ${num2} are equal`);
}


//Now it seems  one if statement has only one condition but it isn't. Multiple conditions can be evaluated using logical operators for combining conditions.

/*Logical AND/&&: This operator returns true if and only if all the conditions are true.
Logical OR/|| : Returns true if any of the given condition is true.
Logical NOT/! : Returns true if the condition is false and false if the condition is true. */
let num3 = 1;
if (num3>num1 && num3>num2) {
    console.log(`${num3} is bigger than ${num1} AND ${num2}.`);
}else if (num3>num1 || num3>num2) {
    console.log(`${num3} is bigger than ${num1} OR ${num2}`);
}else if (num3!==0) {
    console.log(`${num3} is NOT equal to zero.`);
}else{
    console.log(`${num3} is ${num3}. Tu samjha naaaa.. xP`);
}


//Switch condition
//Basic switch statement
switch (num1) {
    case 15: //Switch cases can't execute complex or comparative operations.
        console.log(`Number is ${num1}`)
        break; //Break tells the runtime/JS engine  to strop the code block if the case is true. it works like if ..else statement's curly braces.

    default: //This works like else in if...else condition.
        console.log(`Case doesn't match.`);
        break;
}


//Ternary Operator: This operator is the miniature version of if else where it returns one code if the condition true and do other if false.
//Basic syntex of ternary operator
let me='Yeasin';
(me==='Yeasin')? console.log(`I'm ${me}.`):console.log(`It's not me.`);