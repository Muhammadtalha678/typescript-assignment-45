let myfruitS = ['Apple', 'Orange', 'Banana', 'Cherry', 'StrawBerry', 'Mango', 'Grapes', 'Peach'];
let favorite_fruits = ['Mango', "StrawBerry", 'Banana', 'leach', 'watermellon'];
myfruitS.forEach(element => {
    for (let index = 0; index < favorite_fruits.length; index++) {
        if (favorite_fruits[index] === element) {
            console.log(`Iam really like ${element}`);
        }
    }
});
export {};
