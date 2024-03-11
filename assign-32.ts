// • Make a list of five or more usernames called current_users.
let current_users: string[] = ['Ayesha', 'Owais', 'Fahan', 'Tahir', 'Babar', 'Hafeez', 'Usman', 'Nafay', 'Bill Gates']

// Make another list of five usernames called new_users.Make sure one or two of the new usernames are also in 
// the current_users list.
let new_users: string[] = ['Furqan', 'Talha', 'Taha', 'Raza', 'BABAR', 'Hafeez', 'Khubabib', 'Umar', 'Abu Bakar']

//Loop through the new_users list to see if each new username has already been used.If it has, print a message that
//the person will need to enter a new username.If a username has not been used, print a message saying that the
//username is available.

let currentCaseSensitiveUsers: string[] = []
for (let index = 0; index < current_users.length; index++) {
    currentCaseSensitiveUsers.push(current_users[index].toLowerCase())
}
for (let index = 0; index < new_users.length; index++) {
    if (currentCaseSensitiveUsers.includes(new_users[index].toLowerCase())) {
        console.log("\nYou have to enter the new username because the name " + new_users[index] +" have already been taken\n");
        
    }
    else {
        console.log(`The username ${new_users[index]} is available`);
        
    }
    
}
