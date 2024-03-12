// Magicians: Make a array of magician’s names.Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

function show_magicians(magicianName:string[]) {
    for (let index = 0; index < magicianName.length; index++) {
        console.log(magicianName[index]);
        
        
    }
}
const magiciansName: string[] = ['Talha', 'Farhan', 'Furqan']
show_magicians(magiciansName)