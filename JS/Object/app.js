//Creating an object
//Creating an object with curly braces/second bracked
let anime = {
  name: "Dragon Ball",
  protagonist: "Son Goku",
  genre: ["Action", "Martial Arts", "Super power", "Shonen"].join(),
};
//Creating object with object constructor
const anotherAnime = new Object();
anotherAnime.name = "Bleach";
anotherAnime.protagonist = "Kurosaki Ichigo";
anotherAnime.genre = ["Action", "Martial Arts", "Super power", "Shonen"].join();

console.log(anime);
console.log(anotherAnime);

//Object.assign()
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { d: 1, e: 2, f: 3  };
let obj3 = { a: 4, b: 5, c: 6 };
let copy =  Object.assign(obj1,obj2,obj3); //Assign() methods merge objects with same key and changes the targeted object with sourse object keys and values.
console.log(copy);

//Object.create()
let obj4= Object.create(anime); //Creates a new object using the given object as prototype.
console.log(obj4.name);

//Object.defineProperty()
Object.defineProperty(obj2,'g',{value:1}); //Define a property with a static value meaning the value can't be changed without changing the descriptors.
obj2.g=2;
console.log(obj2);

//Object.defineProperties()
Object.defineProperties(obj3,{'d':{value:1},'e':{value:2}}); //This method works like defineProperty() method.
console.log(obj3);

//Object.entries()
let output=Object.entries(anime); //Creates an array with the key and value pair of the object.
console.log(output);
for (const [key, value] of Object.entries(anime)) {
    console.log(key,':',value);
  }

//Object.freeze()
Object.freeze(obj2); //This method make the object static meaning nothing can be changed or modified.
obj2.d=2; //The value of d will not change because of the freeze mehod.
console.log(obj2);

//Object.fromEntries()
array=[['0','1'],['1','2']];
let createdFromArray= Object.fromEntries(array); //Creates an object from itarators.
console.log(createdFromArray);

//Object.getOwnPropertyDescriptor()
console.log(Object.getOwnPropertyDescriptor(anime,'name')); //This property gets the descriptor of a property.

//Object.getOwnPropertyDescriptors()
console.log(Object.getOwnPropertyDescriptors(anime)); //This method works like getOwnPropertyDescriptor but for all the properties.

//Object.getPrototypeOf()
console.log(Object.getPrototypeOf(obj4)); //Returns the prototype of the given object.

//Object.is()
console.log(Object.is('ame','name')); //This methods compares two values.

//Object.isExtensible()
console.log(Object.isExtensible(anime)); //Shows if the object is extensible meaning new properties can be added later.

//Object.isFrozen()
console.log(Object.isFrozen(obj2)); //Checks is the object is frozen or not.

//Object,keys()
console.log(Object.keys(anotherAnime)); //Takes the property names of an object and returns an array.

//Object.preventExtensions()
Object.preventExtensions(anotherAnime); //Prevents adding new properties in an object.
anotherAnime.antagonist = 'Aizen'; //This new property will not be added in the object.
console.log(anotherAnime);

//Object.seal(0
let obj5={};
obj5= Object.getPrototypeOf(anime);
obj5=Object.getOwnPropertyDescriptors(anime);
Object.seal(obj5); //Seals the object. Preventing new properties to be added and makes existing ones non configurable.
delete obj5.name; //The property will not be deleted.
console.log(obj5);

//Object.setPrototypeOf()
let obj6= new Object();
obj6=Object.setPrototypeOf(obj6,anotherAnime); //Sets anotherAnime as the prototype  of obj6
console.log(Object.getPrototypeOf(obj6)); //The prototype was set.

//Object.values()
console.log(Object.values(anotherAnime)); //This method works like the .keys() method but here it works with values instead of keys. And returns an array.

//Object.hasOwnProperty()
console.log(anime.hasOwnProperty('name')); //Checks if the given property is a property of the object. Retuns  a boolean value.
console.log('name' in obj6); //This method of checking property checks for direct and inherited properties.

//Object.isPrototypeOf()
console.log(obj5.isPrototypeOf(anime)); //Checks the prototype of an object.

//Object.propertyIsEnumerable()
console.log(anime.propertyIsEnumerable('name')); //Checks is the property is enumerable or not.

//Object.toLocaleString()
let string= Date (Date.now);
console.log(string.toLocaleString('US')); //Returns a string representing the object.

//Object.toString()
console.log(anime.toString()); //Returns a string representing the objrct.

//Object.valueOf()
console.log(obj2.valueOf()); //Shows value of a object as an array.

