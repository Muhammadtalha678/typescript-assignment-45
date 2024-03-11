// Write a function called describe_city() that accepts the name of a city and its country.

// Give the parameter for the country a default value.
function describe_city(city_name: string, country_name: string = "Pakistan") {
    // The function should print a simple sentence, such as Karachi is in Pakistan.
    console.log(`${city_name} is in ${country_name}`);

}
// Call your function for three different cities
describe_city("Karachi")
describe_city("Islamabad")
// At least one of which is not in the default country.
describe_city("Kabul","Afghanistan")