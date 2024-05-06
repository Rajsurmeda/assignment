// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.




function make_great(magicians: string[]):void{
    for(let i=0;i< magicians.length;i++){
        magicians[i]=`the great ${magicians[i]}`;
    }
};

function show_magicians(magician:string[]):void{
    for(let magician of magicians){
        console.log(magician);
        
    }
};

//define an array of magician's names
let magicians:string[]=["kapil","harry","penn & teller"];

//call the function to modify the array of magicians
make_great(magicians);

//call the function to print the names of magicians
show_magicians(magicians);









