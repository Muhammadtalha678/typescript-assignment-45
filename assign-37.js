// Make a large shirt and a medium shirt with the default message, and a shirt of
// any size with a different message.
// Modify the make_shirt() function so that shirts are large by default with a message that
// reads I love TypeScript
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Creating a "${size}" shirt with the message: "${message}"`);
}
make_shirt();
// Make a medium shirt with the default message,
make_shirt("medium");
// Make a shirt of any size with a different message.
make_shirt("small", "GenAI");
export {};
