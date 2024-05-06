"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let car = "subaru";
let number = 10;
let fruits = ["apple", "banana", "orange"];
//tests for equality and inequality with strings
console.log("test for equality with strings: 'subaru'==='subaru'. I predict true.");
console.log('subaru' === 'subaru');
console.log("test for inequality with strings: 'subaru'!=='toyota'. I predict true.");
console.log('subaru' !== 'subaru');
//test using the lowercase function
console.log("test using lowercase function:'SUBARU' in lowercase equal 'subaru'  I predict :true");
console.log(car.toLowerCase() === 'subaru');
//numerical tests
console.log("numerical test:10===10. I predict true.");
console.log(number === 10);
console.log("numerical test:10<20. I predict true.");
console.log(number < 20);
console.log("numerical test : 10>5. I predict true.");
console.log(number > 5);
console.log("numerical test: 10>= 10.I predict true.");
console.log(number >= 10);
console.log("numerical test: 10<=10. i predict true.");
console.log(number <= 10);
//tests using "and" and "or" operators
console.log("test using 'and' operator: is 10 greater than 5 and less than 20? I predict true.");
console.log(number > 5 && number < 20);
console.log("test using or operators: is 10 less than 5 or greater than 20? I predict true.");
console.log(number < 5 || number > 20);
//test whether an item  is an array
console.log("test whether 'apple' is in the fruits array. I predict true.");
console.log(fruits.includes('apple'));
//test whether an item is not an array
console.log("test whether 'mango' is not in the fruits array. I predict true.");
console.log(!fruits.includes('mango'));
