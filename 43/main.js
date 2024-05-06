"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`the great ${magician}`);
    }
    return great_magicians;
}
;
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
//  define an array of magician's names
let magicians = ["kapil", "harry", "penn & teller"];
//call the function to modify a copy of the array of magicians
let great_magicians = make_great(magicians.slice());
//call the function to print the name of original magicians
console.log("original magicians:");
show_magicians(magicians);
//call the function to print the name of great magicians
console.log("\n great magicians:");
show_magicians(great_magicians);
