"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let usernames = ["raj surmeda", "mukesh", "amir", "abdullah"];
if (usernames.length === 0) {
    console.log("we need to find some users!");
}
else {
    for (let username of usernames) {
        if (username === "raj surmeda") {
            console.log("hello raj surmeda would you like to see a status report?");
        }
        else {
            console.log(`hello ${username}, thank you for logging in again`);
        }
    }
}
//Now, let's create the program for checking username
let current_users = ["raj surmeda", "mukesh", "amir", "abdullah"];
let new_users = ["raj", "hamza", "hunain", "sunil"];
for (let new_user of new_users) {
    let usernameExists = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    if (usernameExists) {
        console.log(`sorry the username '${new_user}' is all ready taken please choose different username.`);
    }
    else {
        console.log(`congratulation! the username '${new_user}' is avalible `);
    }
}
;
