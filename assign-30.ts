let userNames: string[] = ['Ali', 'Taha', 'Mubeen', 'Hassan', 'Kainat', 'admin', 'Talha', 'Furqan']

for (let index = 0; index < userNames.length; index++) {
    if (userNames[index] == 'admin') {
        console.log('\n"Hello admin, would you like to see a status report"\n');
    }
    else {
        console.log(`Hello ${userNames[index]}, thank you for logging in again.`);
        
    }
}
