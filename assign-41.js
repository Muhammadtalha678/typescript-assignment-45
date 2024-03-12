// Magicians: Make a array of magician’s names.Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
function show_magicians(magicianName) {
    for (let index = 0; index < magicianName.length; index++) {
        console.log(magicianName[index]);
    }
}
const magiciansName = ['Talha', 'Farhan', 'Furqan'];
show_magicians(magiciansName);
export {};
