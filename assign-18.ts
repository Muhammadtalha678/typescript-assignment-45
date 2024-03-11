// Store the locations in a array.Make sure the array is not in alphabetical order
let placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];

// Print your array in its original order.
console.log("Print your array in its original order.");
console.log(placesToVisit);

// Print your array in alphabetical order without modifying the actual list.
console.log("Print your array in alphabetical order without modifying the actual list.");
console.log([...placesToVisit].sort());

//  Show that your array is still in its original order by printing it.
console.log("Show that your array is still in its original order by printing it.");
console.log(placesToVisit);

//  Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Print your array in reverse alphabetical order without changing the order of the original list.");
console.log([...placesToVisit].sort().reverse());

//  Show that your array is still in its original order by printing it.
console.log("Show that your array is still in its original order by printing it.");
console.log(placesToVisit);

// Reverse the order of your list.Print the array to show that its order has changed.
console.log("Reverse the order of your list.Print the array to show that its order has changed.");
console.log(placesToVisit.reverse());

// Reverse the order of your list again.Print the list to show it’s back to its original order.
console.log("Reverse the order of your list again.Print the list to show it’s back to its original order.");
console.log(placesToVisit.reverse());

// Sort your array so it’s stored in alphabetical order.Print the array to show that its order has been changed.
console.log("Sort your array so it’s stored in alphabetical order.Print the array to show that its order has been changed.");
console.log(placesToVisit.sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(" Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.");
console.log(placesToVisit.reverse());
