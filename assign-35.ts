// Think of at least three different animals that have a common characteristic
// Store the names of these animals in a list,
let animals: string[] = ['dog', 'cat', 'cow']

// then use a for loop to print out the name of each animal.
for (let animal of animals) { //print every value of array
    console.log(animal);

}
console.log('\n');

//  Modify your program to print a statement about each animal, such as A dog would make a great pet. 
for (let index = 0; index < animals.length; index++) {
    console.log(`A ${animals[index]} would be a great pet`);


}

// Add a line at the end of your program stating what these animals have in common.
console.log("\nAny of these animals would make a great pet!")