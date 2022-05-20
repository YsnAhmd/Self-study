//Date Declarations
let date = new Date(); //Date has to be declared with new constructor. JavaScript will use the browser's time zone to determine the date.
console.log(date);
let date2 = new Date(22,04,20); // Creates a date object with the year 2022, month 04, day 20.
document.getElementById("demo").innerHTML = date2.toUTCString(); //toUTCString() returns the date in UTC time zone.
let date3 = new Date('20,May,2002'); // Creates a date based on the given string.
console.log(date3.toDateString());//toDateString() method displays date in a more readable string formate.
let date4 = new Date(365*86400000); // Creates a date based on the given number of milliseconds from 1 jan 1970.
console.log(date4.toISOString()); //toISOString displays the string in ISO/Database formate.

//Date format
//ISO 8601
//YYYY-MM-DDTHH:MM:SS.sssZ
//YYYY-MM-DDTHH:MM:SS.sss+HH:MM
let date5 = new Date("2015-03-25T12:00:00+08:00");
console.log(date5);
//Short Dates
//MM/DD/YYYY
let date6 = new Date("03/25/2015");
console.log(date6);
//long dates
//DD Month YYYY
let date7 = new Date("25 Mar 2015");
console.log(date7);

//Date.parse()
//The Date.parse() method parses a date string and returns the number of milliseconds since 1 January 1970 00:00:00 UTC.
let date8 = Date.parse("2015-03-25T12:00:00+08:00");
console.log(date8);

//Date Get Methods
//getTime(). Returns the number of milliseconds since 1 January 1970 00:00:00 UTC.
let d = new Date();
console.log(d.getTime());
//getFullYear(). Returns the year as a four digit number.
console.log(d.getFullYear());
//getMonth(). Returns the month as a number between 0 and 11.
console.log(d.getMonth());
//getDate(). Returns the day of the month as a number between 1 and 31.
console.log(d.getDate());
//getDay(). Returns the day of the week as a number between 0 and 6.
console.log(d.getDay());
//getHours(). Returns the hour as a number between 0 and 23.
console.log(d.getHours());
//getMinutes(). Returns the minutes as a number between 0 and 59.
console.log(d.getMinutes());
//getSeconds(). Returns the seconds as a number between 0 and 59.
console.log(d.getSeconds());
//getMilliseconds(). Returns the milliseconds as a number between 0 and 999.
console.log(d.getMilliseconds());

//Date Set Methods
//setTime(). Sets the date and time by milliseconds since 1 January 1970 00:00:00 UTC.
let d2 = new Date();
d2.setTime(d2.getTime());
console.log(d2);
//setFullYear(). Sets the year.
d2.setFullYear(2022);
console.log(d2);
//setMonth(). Sets the month.
d2.setMonth(4);
console.log(d2);
//setDate(). Sets the day of the month.
d2.setDate(20);
console.log(d2);
//setHours(). Sets the hour.
d2.setHours(12);
console.log(d2);
//setMinutes(). Sets the minutes.
d2.setMinutes(0);
console.log(d2);
//setSeconds(). Sets the seconds.
d2.setSeconds(6);
console.log(d2);
//setMilliseconds(). Sets the milliseconds.
d2.setMilliseconds(10);
console.log(d2);

//Comparing Dates
//In JavaScript like numbers date can also be compared.
let d3 = new Date();
let d4 = new Date();
console.log(d3.getTime() == d4.getTime()); //Returns true if the dates are equal.
