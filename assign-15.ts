/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send 
out a new set of invitations.You’ll have to think of someone else to invite.*/

import guest_list from "./assign-14.js";

let ChangingGuestList: string[] = []
// console.log(guest_list);

let GuestWhoCantMakeIt: string = "Javed"
let newGuestInvited: string = "Iqbal"

let indexNo: number = guest_list.indexOf(GuestWhoCantMakeIt)
guest_list.splice(indexNo, 1, newGuestInvited)

ChangingGuestList = guest_list

console.log(`New Guest List Who are invited\n`);
for (let index = 0; index < ChangingGuestList.length; index++) {
    console.log(`${ChangingGuestList[index]}, You are inivted at Dinner`);
}
console.log(`\n${GuestWhoCantMakeIt}, cannot come to Dinner`);
console.log(`\n`);

export default ChangingGuestList


