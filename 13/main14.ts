//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let dinnerguest:string[]=["amir","mukesh","ali","abdullah"];
// invitation message to each dinnerguest.
dinnerguest.forEach(guest =>{
console.log(`dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);

});