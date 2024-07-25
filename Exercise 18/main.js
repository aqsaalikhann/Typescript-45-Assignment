var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Netherland", "Kashmir", "Iceland", "Turkey", "Maldives"];
console.log("Original order:", places);
//Alphabetical Order:
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
//Original order:
console.log("Original order:", places);
//Reverse alphabetical order:
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
//Original order:
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order", places);
places.sort();
console.log("Alphabetical order", places);
places.reverse();
console.log("Reverse alphabetical order", places);