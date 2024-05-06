//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


 let guestlist: string[]=["amir","abdullah","mukesh","hamaza","natain"];
 //orginal guest list,
 console.log("original guest list:");
 for(let guest of guestlist){
    console.log("- "+ guest);
    
 }
 //inform that only two people can be invited.
 console.log("\n Unfortunately, we can invite only two people for dinner.");
 // remove guests until only two name remain
 
 while (guestlist.length > 2) {
    let removedGuest: string | undefined = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
    }
}
 // Print invitation messages for the remaining guests
console.log("\nInvitation messages:");
for (let guest of guestlist) {
    console.log(`Dear ${guest}, you are still invited to the dinner party. Please join us!`);
}

// Remove the last two names from the list
guestlist.splice(0, guestlist.length);

// Print the empty list to verify
console.log("\nEmpty guest list:");
console.log(guestlist);



