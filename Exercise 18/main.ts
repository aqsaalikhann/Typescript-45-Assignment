let places :string[] =["Netherland","Kashmir","Iceland","Turkey","Maldives"];
console.log("Original order:",places);

//Alphabetical Order:
console.log("Alphabetical order:",[...places].sort());

//Original order:
console.log("Original order:",places);

//Reverse alphabetical order:
console.log("Reverse alphabetical order:",[...places].sort().reverse());

//Original order:
console.log("Original order:",places);

places.reverse();
console.log("Reversed order:",places);

places.reverse();
console.log("Original order",places);

places.sort();
console.log("Alphabetical order",places);

places.reverse();
console.log("Reverse alphabetical order",places);