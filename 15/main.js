"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestlist = ["amir", "abdullah", "mukesh", "ali"];
//original guest list.
console.log("original guest list:");
for (let guest of guestlist) {
    console.log("- " + guest);
}
;
// bigger dinner table.
console.log("\n good news! we found a bigger dinner table.");
// add one new guest beginning of the array.
guestlist.unshift("hamza");
//add new guest to the middle of the array.
let middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "hunain");
//add new guest to the end of array.
guestlist.push("sunny");
// update guest list.
console.log("\n updated guest list:");
for (let guest of guestlist) {
    console.log("- " + guest);
}
;
// new invitation message for all guest,
console.log("\n invitation messages:");
for (let guest of guestlist) {
    console.log(`dear ${guest} you are invited to the dinner party. please join us.`);
}
;
