"use strict";
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'surbaru';
//test1 : is car equal to subaru? preduction: true.
console.log("is car =='subaru'? I predict true. ");
console.log(car === 'subaru');
//test2: is car not equal to toyota , preduction: true.
console.log("is car!=='toyota' I predict true.");
console.log(car !== 'toyota');
//test 3: is car equal to "ford"? preduction: false.
console.log("is car=='ford' I predict false");
console.log(car == "ford");
//test 4: is car not equal to 'subaru' ? prediction: false.
console.log("car!='subaru' I predict false");
console.log(car !== "subaru");
//test 5: is car less than "toyota"? preduction: false.
console.log("is car< 'toyota' I predict false ");
console.log(car < "toyota");
//test6: is car greater then "ford"? preduction: true.
console.log("is car> 'ford'? i predict true");
console.log(car > "ford");
//test 7: is car length equal to 6? preduction: true.
console.log("is car length == 6? I predict true");
console.log(car.length === 6);
//test8: is car length not equal to 5? preduction: true.
console.log("is car length!= 5? I predict true");
console.log(car.length !== 5);
//test 9: is car uppercase equal to"SUBARU"? preduction: true.
console.log("is car in uppercase=='SUBARU'? I predict true");
console.log(car.toUpperCase() === "SUBARU");
//test 10: is car in lowercase equal to "subaru"? prediction: true.
console.log("is car in lowercase =='subaru'? I predict true.");
console.log(car.toLowerCase() === "subaru");
