// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Step 1: Store the locations in an array
let placestovisit:string[]=["italy","france","india","usa","uk"];

//step 2: print the array in its origional order
console.log("original order:");
console.log(placestovisit);

//step 3: print the array in alphabetical order without modifying the original list
console.log("\alphabetical order:");
console.log([...placestovisit].sort());

//step 4: show that the array is still in its original order,
console.log("\n original oder (not modified):");
console.log(placestovisit);

//step 5: print the array in reverse alphabetical order without changing the original list,
console.log("\n alphabetical order:");
console.log([...placestovisit].sort().reverse());

//step 6:show that the array is still in its original order,
console.log("\noriginal order (not modified):");
console.log(placestovisit);

//step 7: reverse the order of list
placestovisit.reverse();
console.log("\nreversed order:");
console.log(placestovisit);

//step 8: reverse the order of the list againto get back tothe original order,
placestovisit.reverse();
console.log("\n original order:");
console.log(placestovisit);

//step 9: sort the array inalphabetical order,
placestovisit.sort();
console.log("\nalphabetical order:");
console.log(placestovisit);


//step 10:sort the array in reverse alphabetical oder,
placestovisit.sort((a,b)=>b.localeCompare(a));
console.log("\nreverse alphabetical order:");
console.log(placestovisit);





























