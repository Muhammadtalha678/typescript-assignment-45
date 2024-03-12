// Great Magicians: Start with a copy of your program from Exercise 39 which is Q41. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Greatto each magician’s name.Call show_magicians()
// to see that the list has actually been modified.
// Start with a copy of your program from Exercise 39 which is Q41
function show_magicians(magicianName) {
    for (let index = 0; index < magicianName.length; index++) {
        console.log(magicianName[index]);
    }
}
//  Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Greatto each magician’s name
function make_great(magiciansNames) {
    for (let index = 0; index < magiciansNames.length; index++) {
        magiciansNames[index] = `${magiciansNames[index]} the great`;
        // console.log(magiciansName[index]);
    }
}
const magiciansName = ['Talha', 'Farhan', 'Furqan'];
make_great(magiciansName);
// Call show_magicians()
// to see that the list has actually been modified.
show_magicians(magiciansName);
export {};
// console.log(magiciansName);
