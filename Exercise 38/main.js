"use strict";
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}.`);
}
//calling the function:
describe_city("karachi");
describe_city("lahore");
describe_city("hong kong", "china");
