// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
import biggerGuestList from "./assign-16.js";
let updatedGuestList = [];
console.log("\n");
// console.log(biggerGuestList);
console.log("Iam inviting only two people for dinner");
console.log("\n");
// biggerGuestList.pop()
// console.log(biggerGuestList);
for (let index = biggerGuestList.length - 1; index > 1; index--) {
    console.log(`Sorry, ${biggerGuestList.pop()}, You are not invited at dinner`);
}
updatedGuestList = biggerGuestList;
console.log(`\n`);
let i = 0;
while (i < biggerGuestList.length) {
    console.log(`${updatedGuestList[i]}, You are still inivited for dinner`);
    i++;
}
biggerGuestList.splice(0, biggerGuestList.length);
console.log(biggerGuestList);
console.log('\n');
