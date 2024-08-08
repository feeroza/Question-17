//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
//a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
//of your program.
var guestArray = ["fatima", "bismah", "eisha"];
var canNotAttend = "eisha";
var newGuest = "feeroza";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
guestArray.unshift("naiha");
var fmGuest = "saima";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, fmGuest);
guestArray.push("aysha");
console.log("we can invite only two people for dinner!");
while (guestArray.length > 2) {
    var removeguest = guestArray.pop();
    console.log("\nsorry \n".concat(removeguest, " we can't invite you to dinner!"));
}
guestArray.map(function (item) { return console.log("".concat(item, " you are still invited to dinner!")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
