// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(...items: string[]): void{
    console.log("making sandwich with the following items:");
    for (let item of items){
        console.log(`-${item}`);
        
    }
    console.log("sandwich complete!\n");
    
};

//call the function three timess with a different number of arguments each time
make_sandwich("hum","cheese","lettuce");
make_sandwich("turkey","swiss cheese","tamato","mayonnaise");
make_sandwich("peanut butter", "jelly");


