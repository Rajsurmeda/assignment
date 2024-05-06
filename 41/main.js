"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(megicians) {
    for (let megician of magicians) {
        console.log(megician);
    }
}
;
//define an array og magician's name
let magicians = ["kapil", "harry", "penn & teller"];
//call the function to print the name of magicians
show_magicians(magicians);
