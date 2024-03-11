//  Write a function called city_country() that takes in the name of a city and its country.
function city_country(city_name, country_name) {
    // The function should return a string formatted like this:
    // "Lahore, Pakistan"
    return `"${city_name}, ${country_name}"`;
}
// Call your function with at least three city - country pairs, and print the value that’s returned.
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Gilgit Baltistan", "Pakistan"));
console.log(city_country("Sibi", "Pakistan"));
export {};
