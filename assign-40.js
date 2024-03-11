// Write a function called make_album()
// The function should take in an artist name and an album title,
//  Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
function make_album(artist_name, album_title, album_track) {
    // builds a Object describing a music album. 
    let music_album = {
        artist_name: artist_name,
        album_title: album_title,
    };
    // If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
    if (album_track) {
        music_album.number_of_track = album_track;
    }
    // music_album['s'] = "ss"
    return music_album;
}
// Use the function to make three dictionaries representing different albums.
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2");
let album3 = make_album("Artist3", "Album3");
// Print each return value to show that Objects are storing the album information correctly.
console.log(album1);
console.log(album2);
console.log(album3);
// Make at least one new function call that includes the number of tracks on an album.
let album4 = make_album("Artist4", "Album4", 20);
console.log(album4);
export {};
