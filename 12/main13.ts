// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoritetransportation:string[]=["bus","car","motorcycle","train"];
//print statements about your favorite transportation,
favoritetransportation.forEach(item => {
    console.log(`I would like to own a ${item}`);
    
});
