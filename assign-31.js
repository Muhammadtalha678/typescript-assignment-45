let user_names = ['Ali', 'Taha', 'Mubeen', 'Hassan', 'Kainat', 'admin', 'Talha', 'Furqan'];
// make sure the list of users is not empty.
if (user_names.length > 0) {
    console.log("User list is not empty");
    // Remove all the usernames from the array
    user_names = [];
    // Print a message confirming the removal
    console.log("All usernames have been removed.");
}
else {
    console.log("If the list is empty, print the message We need to find some users!");
}
export {};
