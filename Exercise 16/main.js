"use strict";
let guest_list = ["ayaan", "farhan", "shanzey"];
console.log("Great news! i found a bigger dinner table!");
//adding more guest.
guest_list.unshift("parishah");
guest_list.splice(guest_list.length / 2, 0, "zeeshan");
guest_list.push("affan");
guest_list.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
