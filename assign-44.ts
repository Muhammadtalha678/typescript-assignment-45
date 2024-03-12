/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.The function should have
one parameter that collects as many items as the function call provides, and it should print a summary of the 
sandwich that is being ordered.Call the function three times, using a different number of arguments each time.*/

function sandwich(items: string[]) {
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        console.log(element);
        
    }
    

}
sandwich(["Turkey", "Cheese", "Lettuce", "Tomato"]);
sandwich(["Ham", "Swiss Cheese", "Pickles"]);
sandwich(["Peanut Butter", "Jelly"]);
sandwich(["Peanut Butter", "Jelly"]);
// or METHOD 2 
// ... accepts much element 
function sandwich2(...items: string[]) {

    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        console.log(element);
        
    }
    

}
sandwich2("Turkey", "Cheese", "Lettuce", "Tomato");
sandwich2("Ham", "Swiss Cheese", "Pickles");
sandwich2("Peanut Butter", "Jelly");
sandwich2("Peanut Butter", "Jelly");