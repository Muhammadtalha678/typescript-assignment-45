/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array
 of magicians’ names.Because the original array will be unchanged, return the new array and store it in a separate
array.Call show_magicians() with each array to show that you have one array of the original names and one array
with the Great added to each magician’s name.*/

function make_great(magiciansName: string[]): string[] {
    let modifiedArray: string[] = []
    for (let index = 0; index < magiciansName.length; index++) {
        modifiedArray.push(`${magiciansName[index]} the great`)
    }
    return modifiedArray
}

function show_magicians(magicianName: string[]) {
    for (let index = 0; index < magicianName.length; index++) {
        console.log(magicianName[index]);


    }
}
const originalArray: string[] = ['Talha', 'Farhan', 'Furqan']  
// call the old array to make great function to modified with the great word
const newArray: string[] = make_great(originalArray)

    // Call show_magicians() with each array to show that you have one array of the original names and one array
    // with the Great added to each magician’s name.
    
show_magicians(originalArray)
console.log('\n');

show_magicians(newArray)
