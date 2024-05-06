"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names = ["mukesh", "amir", "abdullah"];
let Greetingsmessage = "hello!:";
// Print personalized message to each person
names.forEach(name => {
    console.log(`${Greetingsmessage}${name}!`);
});
