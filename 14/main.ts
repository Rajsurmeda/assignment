// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
let guestlist: string[]=["amir","mukesh","abdullah","ali"];
//original guest list
console.log("original guest list");
for (let guest of guestlist){
    console.log("-"+ guest);
    
};
// suppose abdullah abdullah can't make it.
let unableToAttend: string ="abdullah";
console.log(unableToAttend + "abdullah abdullah can't make it.");
//replace abdullah with a new guest.
let newguest:string="hamza";
let indexofunableToAttend:number=guestlist.indexOf(unableToAttend)

if(indexofunableToAttend !==-1){
    guestlist[indexofunableToAttend]= newguest;
}
// update guest list
console.log("\nUpdated guest list:");
for(let guest of guestlist){
    console.log("- "+ guest);
    
}
//invitation message for remaning guest.
console.log("\ninvitation message:");
for (let guest of guestlist) {
    console.log(`Dear ${guest}, you are invited to the dinner party. Please join us!`);
}
