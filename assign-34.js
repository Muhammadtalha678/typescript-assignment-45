// Think of at least three kinds of your favorite pizza.Store these pizza names in a array, and then use a for 
//loop to print the name of each pizza.
let fav_pizzas = ["Chicken Pizza", 'Pepperoni Pizza', 'Garlic Pizza'];
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the
// pizza.For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let index = 0; index < fav_pizzas.length; index++) {
    console.log(`I like ${fav_pizzas[index]}, pizza`);
}
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza.The output should
//  consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really
//  love pizza!
console.log(`\n${fav_pizzas[0]} is classic and delicious.`);
console.log(`${fav_pizzas[1]} with its simple ingredients is always a favorite.`);
console.log(` ${fav_pizzas[2]} satisfies my craving for a variety of toppings.`);
//  Closing statement expressing love for pizza
console.log("\nPizza is one of my favorite foods. I really love pizza!");
export {};
