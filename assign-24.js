// // More Conditional Tests: You don’t have to limit the number of tests you create to 10.If you want to try more
// // comparisons, write more tests.Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings
// let myName: string = "Muhammad Talha"
// console.log(`Equality Test: ${myName === 'Muhammad Talha'}`);
// console.log(`Inequality Test: ${myName !== 'Muhammad Talha'}\n`);
// // • Tests using the lower case function
// let str1: string = "Hello"
// let str2: string = "hello"
// console.log(`Without Lower Case Function (Case Sensitive): ${str1 === str2}`);
// console.log(`With Lower Case Function Lower Case Function (Case InSensitive): ${str1.toLowerCase() === str2.toLowerCase()}\n`);
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less
// // than or equal to
// let num1: number = 100
// let num2: number = 50
// console.log(`Equality Testing: ${num1 === num2}`);
// console.log(`InEquality Testing: ${num1 !== num2}\n`);
// console.log(`Greater than: ${num1 > num2}`);
// console.log(`Less than: ${num1 < num2}\n`);
// console.log(`Greater than equal to: ${num1 >= num2}`);
// console.log(`Less than equal to: ${num1 <= num2}\n`);
// // • Tests using "and" and "or" operators
// num1 = 1000
// console.log(`Equality Test using "and" logical operator: ${num1 > 0 && num1 < 2000}`);
// console.log(`InEquality Test using "and" logical operator: ${num1 != 0 && num1 < 1000}\n`);
// console.log(`Equality Test using "or" logical operator: ${num1 > 0  || num1 <= 500 }`);
// console.log(`InEquality Test using "or" logical operator: ${num1 <= 500  || num1 == 0 }\n`);
let itemsArray = [10, "Talha", true, null];
let itemInArray = "Talha";
let itemNotInArray = "10";
// • Test whether an item is in a array
if (itemsArray.includes(itemInArray)) {
    console.log(`Yes, ${itemInArray} includes in array: ${JSON.stringify(itemsArray)}.`);
}
// • Test whether an item is not in  array
if (!(itemsArray.includes(itemNotInArray))) {
    console.log(`No, ${itemNotInArray} not in array ${JSON.stringify(itemsArray)} because ${itemNotInArray} is string`);
}
export {};
