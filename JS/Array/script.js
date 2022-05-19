let num = [1,2,3,4,5];
let num2 = new Array(1,2,300,3,4,5);
let array =[1,2,'a',{a:1,b:2,c:3}];
let anime =['AOT','Baccano','Gintama','Couboy Bebob'];
let output;

// Array methods
// Array checks
console.log(Array.isArray(array));

//Array.from() 
let aF=Array.from('Yeasin'); //Creates an array from an array like or iterable object.
console.log(aF);

// Array.of()
let af = Array.of('1,2,5'); //Creates an array with a variable number of arguments.
console.log(af);

//Array.at()
console.log(aF.at(-1)); //This method takes an integer value and returns the item at that index. The value can be positive or negative.

//Array.entries()
let entries = [1,2,3,4,5,6,7];
values= entries.entries(); //Returns an array repeater object that contains value and the key in a pair.
console.log(values.next().value);
console.log(values.next().value);

//Array.copyWithin()
let copyWithin= [1,2,3,4,5,6,7,8,9];
console.log(copyWithin.copyWithin(2,-3,-1)); //Copys the array within itself where first perameter is the target of copying,2nd is for the start of copy and the last means the ending of copying.

//Array.every()
function everyTest(element) {
    return element >=3;
}
console.log(entries.every(everyTest)); //Tests every elements of an array according to the function provided. Returns boolean value.

//Array.fill()
let fill = Array(5); //Creates an array containing5 empty slots
fill=fill.fill(5,1,4); //Fills the array with given value according to start and end points. Its a mutator method that means it will change the array.
console.log(fill);

// Array.filter()
filter= num.filter(value => value>=2); //Checks the num array based on the function and creates a new array with the values which returned true after going through the function.
console.log(filter);

// Array.find()
find=[1,2,3,4,5,6,7,8,9];
console.log(find.find(value=> value>3));//This method returns the value of the first element in the provided array that satisfies the provided testing function.

// Array.findIndex()
findIndex= find.findIndex(value=> value==3); //This method works like find method except it returns the index instead of value.
console.log(findIndex);

// Array.flat()
flat=[1,2,[[[3,4,5]]]]; 
console.log(flat.flat(3)); //Creates a new array from concatenating all the sub-arrays based on the given depth.

//Array.forEach()
find.forEach(element => {
    console.log(element);
});
console.table(find); //Shows content as a table and only works on array like objects

//Array.includes()
console.log(find.includes(3,-2)); //Finds the element in the array according to the index number given and returns a boolean value.

//Array.join()
join=['Yeasin','Rayhan','Guru'];
console.log(join.join('-')); //Converts the array into a string and returns the concated string value saparated by specific separator.

//Array.lastIndexof()
newarr=['Rayhan','Rayhan','Rayhan'];
console.log(newarr.lastIndexOf('Rayhan')); //Finds out the last index of the given element.

//Array.reduce()
reduce = [1,2,3,4,5];
function reducer(pV,cV) {
    return pV+cV;
}
console.log(reduce.reduce(reducer,2)); //Executes the given callbackFn on every elements and returns a single value. can be used to find out the sum of an array.
reduce[5]=6; //Reduce doesnt change the returned value if the array is changed later.

//Array.reduceRight()
rr=[[1],[2],[3]];
console.log(rr.reduceRight((x,y)=>x.concat(y))); //This method works like reduce method but it works from right to left.

//Array.some()
console.log(reduce.some(x=> x>3)); //Here the some methods executes the function written inside in the reduce array and checks the elements and returns a boolean value.

// Array length 
neww=['Goku','Luffy','Ichigo'];
neww[5]='Asta'; //JavaScript auto incriments the length of the array.
len=neww.length; //JavaScript length property is an integar between 0-2^32

console.log(neww[4]); //JavaScript incriments array length with empty spaces thats why it will return an undefined error
console.log(len); 

neww.length=8; //Fixed the length of the array.
console.log(neww);
console.log(Object.keys(neww)); //Shows the object keys/index keys of the array elements/the defined number of values by showing their index..

neww.length= 2;
console.log(neww); //Decreasing the length of the array will delete the elements outside of the array set length.

let singleArray = new Array(5); //This is a javascript exception when an array is created with array constructor and has only one integar type parameter it will be taken as the length of the array and will fill it with empty values.

//Access array last element
console.log(num[num.length-1]);

//Check array element using index number
output =num[2];

//Replace inedex value without changing real array/Mutating
array[1]='10'


//Check index of array elements
output =num.indexOf(4);

//Mutating array
//Add a element in the array
array.push(1); //Adds element in the last of the array
array.unshift(2); //Adds element in the first of the array

//Delete array element
array.pop(); //Deletes the last element of array
array.shift(); //Removes the first element of the array

//Delete specific array element  using index number
console.log(reduce.splice(1,1,'new_element')); //splice also gives a way  to incert new element.

//Array.toLocatString()
arr=[1,2,3,4,5,'a'];
console.log(arr.toLocaleString()); //Converts the array into strings. It has two properties.

//Array.toString()
tS=[1,2,'a','3',true];
console.log(tS.toString()); //Retuns a string  from the array and overrides object to string method.

//Array.values()
iterator=tS.values(); //This method creates an iterator for the array.

//Reverse a array elements
array.reverse();

//Array Concatation
output=num.concat(num2);

//Array sorting
output = anime.sort(); //Alphabetic wise sort
output =  num2.sort(); //Number sort not based on the value
output = num2.sort(function(x,y){return x-y}); //Number sorting  based on the value

//Copying array 
 let num3=num.slice(); //Returns a new array.
 console.log(num3);

//output
console.log(output);
console.log(array);