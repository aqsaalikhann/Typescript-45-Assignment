"use strict";
function create_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    //for additional option
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
//calling a function
let my_car = create_car("toyota", "corolla", "colour: black", "sunroof: true");
console.log(my_car);
