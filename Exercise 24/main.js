"use strict";
// Tests for equality and inequality with strings
let student = ("Abdul");
let student2 = ("Abdul aziz");
console.log(student === student2);
console.log(student !== student2);
// Tests using the lower case function
let upperCase = "RABIA";
let lowerCase = "rabia";
console.log(upperCase.toLowerCase() === lowerCase);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let id = 56;
let id2 = 59;
console.log(id === id2);
console.log(id !== id2);
console.log(id > id2);
console.log(id < id2);
console.log(id >= id2);
console.log(id <= id2);
// Tests using "and" and "or" operators
let x = 5;
let y = 10;
let z = 20;
console.log(x < y && y < z);
console.log(x > y || y < z);
//Test whether an item is in a array
let idNo = [1, 3, 6];
let itemToFind = 6;
console.log(idNo.indexOf(itemToFind) !== -1);
// Test whether an item is not in a array
console.log(idNo.indexOf(8) === -1);
