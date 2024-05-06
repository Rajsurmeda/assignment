// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array

function show_magicians(magicians:string[]):void{
    for (let megician of magicians){
        console.log(megician);
        
    }
};




//define an array og magician's name
let magicians:string[]=["kapil","harry","penn & teller"];

//call the function to print the name of magicians
show_magicians(magicians)




