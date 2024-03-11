// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.

import ChangingGuestList from "./assign-15.js";

let biggerGuestList: string[] = []
// console.log(ChangingGuestList)

let newGuest1: string = "Talha"
let newGuest2: string = "Farhan"
let newGuest3: string = "Furqan"

// Add one new guest to the beginning of your array.

ChangingGuestList.unshift(newGuest1)
// console.log(ChangingGuestList)

// Add one new guest to the middle of your array.
let middleIndexNo: number
if (ChangingGuestList.length % 2 === 0) {
    middleIndexNo = ChangingGuestList.length / 2
}
else {
    middleIndexNo = (ChangingGuestList.length + 1) / 2
}
ChangingGuestList.splice(middleIndexNo, 0, newGuest2)
// console.log(ChangingGuestList)

// Use append() to add one new guest to the end of your list.

ChangingGuestList.push(newGuest3)
// console.log(ChangingGuestList)

//  Print a new set of invitation messages, one for each person in your list.
biggerGuestList = ChangingGuestList
for (let index = 0; index < biggerGuestList.length; index++) {
    console.log(`${biggerGuestList[index]}, You are inivted at Dinner`);
}
console.log("\nYou found a bigger dinner table.\n");

export default biggerGuestList
